"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState("");

  const onSubmit = (data: FormData) => {
    setError("");
    // TODO: API login logic
    console.log("Sign in data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
        />

        <Button text="Sign In" type="submit" />
      </form>
    </div>
  );
}
