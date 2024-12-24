"use client";

import React, { useState } from "react";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <>
      <Link href={"/public"} className={"text-2xl font-semibold"}>
        linktree
      </Link>
      <h1 className={"text-center text-5xl font-bold mt-24 tracking-tight"}>
        Welcome back!
      </h1>
      <p className={"text-center text-stone-500 mt-1"}>
        Log in to your Linktree
      </p>
      <form
        className={
          "flex flex-col items-center gap-y-2 w-3/4 max-w-sm mx-auto mt-8"
        }
        onSubmit={onSubmit}
      >
        <Input placeholder={"Email"} name={"email"} onChange={onChange} />
        <Input placeholder={"Password"} name={"password"} onChange={onChange} />
        <Button type={"submit"} className={"w-full"}>
          Login
        </Button>
      </form>
      <p className={"text-center text-sm mt-4"}>
        Don't have an account?{" "}
        <Link href={"/register"} className={"underline underline-offset-2"}>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
