"use client"
import React from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { personalInfoSchema } from '@/lib/validation';

interface FormInputs {
  userName: string;
  password: string;
}   




const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: zodResolver(personalInfoSchema),
    });
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
    };

  return (
    <div className="h-screen flex items-center justify-center text-black px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-[600px] rounded-3xl shadow-xl overflow-hidden">
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-8 bg-white/30 backdrop-blur-sm">
          <h1 className="text-3xl text-blue-700 font-bold mb-6">Login</h1>
          <form
            className="flex flex-col space-y-4 w-full max-w-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("userName")}
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded-xl p-2"
            />
            {errors.userName && (
              <span className="text-red-500 text-sm">
                {errors.userName.message}
              </span>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-xl p-2"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold rounded-xl p-2"
            >
              Login
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 h-full relative hidden md:flex items-center justify-center bg-white/30 backdrop-blur-sm">
          <Image
            src="/images/login/benjiam.png"
            alt="Login Illustration"
            width={400}
            height={400}
            className="object-contain max-h-[80%] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage
