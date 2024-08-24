"use client";
import Image from "next/image";
import React from "react";
import * as yup from "yup";
import { Input, Button, Card, Avatar } from "antd";
import { LockOutlined } from "@ant-design/icons";

export default function Messages() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const loginState = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Gecersiz mail girdiniz")
      .required("Mail adresinizi giriniz"),
    password: yup
      .string()
      .test(
        "len",
        "Parola karakter limitini astiniz",
        (val) => val.length <= 12
      )
      .test("len", "Parola 8 karakterden az olamaz", (val) => val.length >= 8)
      .required("Gecerli parolanizi giriniz"),
  });

  const onSubmit = async (values) => {
    const user =
      users !== null ? users.find((x) => x.email === values.email) : {};

    const matchedUser =
      user !== undefined &&
      user.email === values.email &&
      user.password === values.password;

    if (matchedUser) {
      toast("Basariyla giris yaptiniz. Ana sayfaya yönlendiriliyorsunuz", {
        type: "success",
      });
      router.push("/dashboard");

      localStorage.setItem(
        "userData",
        JSON.stringify({
          id: user._id,
        })
      );
    }

    if (!matchedUser) {
      if (!user) {
        toast(`'${values.email}' kullanici kayitli degil.`, {
          type: "error",
        });
      } else {
        toast(
          `'${values.email}' kullaniciya ait bilgiler eksik veya gecersizdir.`,
          {
            type: "error",
          }
        );
      }
    }
  };

  const handleTogglePassword = () =>
    setShowPassword((showPassword) => !showPassword);

  function handleTaskChange(e) {
    onChange(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative p-24 mt-5 mb-10 border-2 border-slate-300 rounded-sm h-full">
        <Avatar className="m-2 bg-slate-500">
          <LockOutlined />
        </Avatar>
        <div>
          <Input
            type="text"
            onChange={(e) => console.log(e.target.value)}
            className="inputTask"
            //value={value}
            placeholder="Email Adresi"
          />
          <Input
            type="password"
            onChange={(e) => console.log(e.target.value)}
            className="inputTask"
            //value={value}
            placeholder="Sifre"
          />
        </div>
        <Button onClick={() => alert("giris")} type="primary" danger>
          Giris Yap
        </Button>
      </div>
    </main>
  );
}
