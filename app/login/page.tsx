"use client";
import Image from "next/image";
import React from "react";
import {
  Input,
  Card,
  Avatar,
  Form,
  Checkbox,
  Button,
  ConfigProvider,
} from "antd";
import { AppleOutlined, GoogleOutlined, LockOutlined } from "@ant-design/icons";
import { FormProps } from "antd";
import { useRouter } from "next/navigation";

import SessionLayout from "../../../layouts/SessionLayout";

export default function Login() {
  const [imageUrl, setImageUrl] = React.useState<string>("");

  const router = useRouter();

  type FieldType = {
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

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Initiate login with Google");
  };

  const handleAppleLogin = () => {
    // Implement Apple login logic here
    console.log("Initiate login with Apple");
  };

  React.useEffect(() => {
    // Function to fetch a random image URL
    const fetchRandomImage = async () => {
      try {
        // Using Lorem Picsum to get a random image
        const response = await fetch("https://picsum.photos/1200/800");
        if (response.ok) {
          setImageUrl(response.url);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage();

    const intervalId = setInterval(fetchRandomImage, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex h-screen">
        {/* Image section */}
        <div
          className="w-3/4 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: "sepia(1)",
          }}
        ></div>

        {/* Login form section */}
        <div className="flex justify-center items-center w-1/4 bg-[#FFFFF0]">
          <div className="w-3/4">
            <img
              src="/sales_team_hand.png"
              alt="Sales Team Logo"
              className="flex justify-self-center items-center w-20 h-20"
            />
            <h2 className="flex justify-self-center text-2xl font-bold mb-4">
              Login
            </h2>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => router.push("/dashboard")}
                  className="w-full"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div className="flex flex-col space-y-2 mt-4">
              <Button
                icon={<GoogleOutlined />}
                onClick={handleGoogleLogin}
                className="flex items-center bg-[#DB4437] text-white justify-center w-full"
              >
                Continue with Google
              </Button>
              <Button
                icon={<AppleOutlined />}
                onClick={handleAppleLogin}
                className="flex items-center bg-[#0D0D0D] text-white justify-center w-full "
              >
                Continue with Apple
              </Button>
            </div>
            <div className="text-center mt-4">
              <a href="/register">Don't have an account? Register</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
