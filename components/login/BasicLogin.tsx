"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/lib/validation";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SiGoogle, SiApple } from "react-icons/si";

interface FormInputs {
  userName: string;
  password: string;
}

const BasicLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen flex items-center justify-center text-black px-4 sm:px-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[600px] rounded-3xl shadow-xl overflow-hidden">
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-6 md:px-8 bg-white/30 backdrop-blur-sm">
          <h1 className="text-2xl md:text-3xl text-blue-700 font-bold mb-2 md:mb-4">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 text-center">
            Enter your mail and password to acces your account
          </p>
          <form
            className="flex flex-col space-y-3 md:space-y-4 w-full max-w-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              htmlFor="userName"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              {...register("userName")}
              id="userName"
              type="email"
              placeholder="dareynostore@company.com"
              className="border border-gray-300 rounded-xl p-2.5 md:p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            {errors.userName && (
              <span className="text-red-500 text-xs md:text-sm">
                {errors.userName.message}
              </span>
            )}

            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1 mt-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="dareynstore."
                className="border border-gray-300 rounded-xl p-2.5 md:p-2 text-sm md:text-base w-full focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={18} />
                ) : (
                  <AiOutlineEye size={18} />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs md:text-sm">
                {errors.password.message}
              </span>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 mt-1">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label
                  htmlFor="rememberMe"
                  className="text-gray-500 text-xs md:text-sm"
                >
                  Remember Me
                </label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-blue-700 text-xs md:text-sm hover:underline cursor-pointer"
              >
                Forgot Your Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full max-w-sm mt-4 text-white rounded-xl px-6 py-2.5 md:py-2 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition duration-200 shadow-md"
            >
              Log In
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-200" />
              <span className="mx-2 text-gray-400 text-xs md:text-sm">
                Or Login With
              </span>
              <div className="flex-grow border-t border-gray-200" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 w-full bg-white hover:bg-gray-50 transition"
              >
                <SiGoogle size={20} />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 w-full bg-white hover:bg-gray-50 transition"
              >
                <SiApple size={20} />
                Apple
              </button>
            </div>

            <div className="text-center mt-6 text-xs md:text-sm text-gray-500">
              Don't Have An Account?{" "}
              <Link
                href="/auth/register"
                className="text-blue-700 font-medium hover:underline"
              >
                Register Now.
              </Link>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 h-full relative hidden md:flex items-center justify-center bg-white/30 backdrop-blur-sm">
          <Image
            src="/images/login/logins.png"
            alt="Login Illustration"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicLogin;
