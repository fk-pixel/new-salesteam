"use client";
import Image from "next/image";
import React from "react";
import * as yup from "yup";
import { Input, Button, Card, Avatar, Form, Checkbox } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { FormProps } from "antd";
import bgImage from "../../public/SVG-background.gif";

export default function Login() {
  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
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

  function handleTaskChange(e) {
    onChange(e.target.value);
  }

  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <div className="relative bg-white mt-5 border-2 border-slate-100 rounded-lg h-full">
        <div className="flex justify-center p-5">
          <Avatar className="m-2 bg-fuchsia-700  content-center flex">
            <LockOutlined />
          </Avatar>
        </div>
        <div className="p-5">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={() => alert("giris")}
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            //width: "50%",
            height: "2rem",
            //position: "absolute",
            //marginTop: "12rem",
          }}
        ></div>
      </div>
    </main>
  );
}
