import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import app from "../../utilities/firebase/firebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(app);
  const loginWithPass = (email, password) => {
    setIsLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setIsLoading(false);
      if (currentUser) {
        fetch(
          `http://127.0.0.1:3000/jwt/${currentUser.uid}/${currentUser.email}`
        )
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("__at", res.token);
          })
          .catch(err => console.log(err));
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const logOutUser = () => {
    return signOut(auth)
      .then()
      .catch(err => console.log(err));
  };
  const data = {
    user,
    isLoading,
    loginWithPass,
    logOutUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
