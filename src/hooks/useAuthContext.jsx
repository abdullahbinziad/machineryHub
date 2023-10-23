import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const useAuthContext = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuthContext;
