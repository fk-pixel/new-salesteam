"use client";
import React from "react";
// import { Form, Input, Button } from "antd";
// import { SignedOut, SignInButton } from "@clerk/nextjs";
import { SignUp } from '@clerk/nextjs'


export default function SignUpPage() {
  return (
    <>
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <SignUp />
       </div>
    </>

  );
}
