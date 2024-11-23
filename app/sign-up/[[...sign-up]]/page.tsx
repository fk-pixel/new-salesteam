"use client";
import React from "react";
// import { Form, Input, Button } from "antd";
// import { SignedOut, SignInButton } from "@clerk/nextjs";
import { SignUp } from '@clerk/nextjs'


export default function SignUpPage() {
  type FieldType = {
    username?: String;
    email?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <SignUp />
       </div>
    </>

  );
}
