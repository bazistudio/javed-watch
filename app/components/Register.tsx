"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [error, setError] = useState("");

  const onSubmit = (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // TODO: send to API
    console.log("Register data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          {...register("name")}
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-4"
        />
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
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded mb-4"
        />

        <Button text="Register" type="submit" />
      </form>
    </div>
  );
}
