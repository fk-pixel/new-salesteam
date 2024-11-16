"use client";

import { usePathname } from "next/navigation";
import { FormOutlined, HomeOutlined } from "@ant-design/icons";

import Main from "@/layouts/Main";
import Login from "@/app/login/page";
import Register from "@/app/register/page";

export default function Portal({ children }) {
  const pathname = usePathname();

  return (
    <>
      <main>
        {pathname === "/login" ? (
          <Login />
        ) : pathname === "/register" ? (
          <Register />
        ) : (
          <Main>{children}</Main>
        )}
      </main>
    </>
  );
}
