import { Navigate, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";

const Login = () => {
  const { loginWithPass, user } = useAuthContext();
  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  if (user) {
    return <Navigate to="/dashboard"></Navigate>;
  }
  const handleSubmit = event => {
    event.preventDefault();
    setLoginErr("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithPass(email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(err => {
        setLoginErr(err.message.split("(")[1].split("/")[1].replace(")"));
      });
  };
  const formStyle =
    "block w-full mt-1 p-3 border-black dark:bg-my-dark-btn text-gray-500 rounded-lg shadow-sm bg-gray-50 focus:border-indigo-300 focus:ring-2 focus:ring-np focus:ring-opacity-50 outline-none";
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex justify-center items-center h-screen">
          <form
            className="mx-2 md:max-w-lg w-full space-y-5 bg-white p-2 md:p-5 rounded-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-red-700 text-xl font-bold">Login here</h2>
            <div>
              <input
                type="email"
                className={`${formStyle}`}
                placeholder="Email"
                name="email"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <input
                type="password"
                className={`${formStyle}`}
                placeholder="Password"
                name="password"
                required
                autoComplete="password"
              />
            </div>
            {loginErr ? (
              <h2 className="font-bold text-red-600">{loginErr}</h2>
            ) : (
              ""
            )}
            <div>
              <input
                type="submit"
                value="Login"
                className="
                h-10
                px-5
                text-white
                bg-btn-grad
                rounded-lg
                transition-colors
                duration-150
                focus:shadow-outline
                bg-np
                hover:bg-indigo-800
                "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
