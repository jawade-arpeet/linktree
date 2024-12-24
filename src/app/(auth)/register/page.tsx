"use client";

import React, { useState } from "react";

import Link from "next/link";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
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
        Join Linktree
      </h1>
      <p className={"text-center text-stone-500 mt-1"}>Sign up for free!</p>
      <form
        className={
          "flex flex-col items-center gap-y-2 w-3/4 max-w-sm mx-auto mt-8"
        }
        onSubmit={onSubmit}
      >
        <Input
          onChange={onChange}
          placeholder={"First Name"}
          name={"firstName"}
        />
        <Input
          onChange={onChange}
          placeholder={"Last Name"}
          name={"lastName"}
        />
        <Input onChange={onChange} placeholder={"Email"} name={"email"} />
        <Input onChange={onChange} placeholder={"Password"} name={"password"} />
        <Button type={"submit"} className={"w-full"}>
          Register
        </Button>
      </form>
      <p className={"text-center text-sm mt-4"}>
        Already have an account?{" "}
        <Link href={"/login"} className={"underline underline-offset-2"}>
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
