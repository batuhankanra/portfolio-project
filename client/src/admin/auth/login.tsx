import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { loginApi } from "../../store/features/auth/login";

const Login: React.FC = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const navigate=useNavigate()
  const { loading, error, isAuthticated } = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();
  const {user}=useAppSelector(state=>state.login)

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginApi({ email, password }));
    
  };
  useEffect(()=>{
    if(user){
      navigate("/admin",{replace:true})
    }
    if(isAuthticated){
      navigate("/admin",{replace:true})
    }
  },[isAuthticated, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Welcome Back
        </h1>
        <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
          Please login to continue
        </p>
        {isAuthticated && (
          <div className="w-full bg-green-600 p-2 rounded-md text-zinc-200">
            Login Successful!
          </div>
        )}
        {error && (
          <div className="w-full bg-red-600 p-2 rounded-md text-zinc-200">
            {error}!
          </div>
        )}
        <form onSubmit={formSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute top-9 text-lg right-4 cursor-pointer text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            

            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
