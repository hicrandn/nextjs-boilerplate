"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/lib/validation";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineRobot,
} from "react-icons/ai";
import { SiGoogle } from "react-icons/si";
import { BsStars } from "react-icons/bs";

interface FormInputs {
  userName: string;
  password: string;
}

const DarkLogin = () => {
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
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-[#18181b] bg-opacity-90 rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-[#232329]">
        <div className="mb-6 mt-2 flex items-center justify-center w-14 h-14 rounded-xl bg-[#232329]">
          <BsStars size={32} className="text-white/80" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 text-center">
          Get Started
        </h2>
        <p className="text-gray-400 text-sm mb-8 text-center">
          Welcome to the next generation platform
        </p>
        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative ">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 space-y-8">
              <AiOutlineMail size={20} />
            </span>
            <input
              {...register("userName")}
              id="userName"
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#232329] text-gray-100 border border-[#232329] focus:border-gray-600 focus:outline-none placeholder-gray-500"
            />
            {errors.userName && (
              <span className="text-red-500 text-xs absolute left-0 -bottom-5">
                {errors.userName.message}
              </span>
            )}
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <AiOutlineLock size={20} />
            </span>
            <input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#232329] text-gray-100 border border-[#232329] focus:border-gray-600 focus:outline-none placeholder-gray-500"
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
            {errors.password && (
              <span className="text-red-500 text-xs absolute left-0 -bottom-5">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-b from-neutral-200 to-neutral-400 text-black font-semibold text-base shadow hover:from-neutral-100 hover:to-neutral-300 transition"
          >
            Sign In
          </button>
        </form>

        <div className="w-full flex justify-end mt-2">
          <Link
            href="/auth/forgot-password"
            className="text-xs text-gray-400 hover:text-white transition underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t border-[#232329]" />
          <span className="mx-2 text-gray-500 text-xs">OR</span>
          <div className="flex-grow border-t border-[#232329]" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#232329] border border-[#232329] text-gray-100 hover:bg-[#232329]/80 transition mb-2"
        >
          <SiGoogle size={20} className="text-[#ea4335]" />
          <span className="font-medium">Sign up with Google</span>
        </button>

        <div className="text-center mt-2 text-xs text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/auth/register"
            className="text-white font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DarkLogin;
