"use client";

import { usePathname } from "next/navigation";
import { FormOutlined, HomeOutlined } from "@ant-design/icons";

import Main from "@/layouts/Main";
import { useUser } from "@clerk/nextjs";
import SignInPage from "@/app/sign-in/[[...sign-in]]/page";

export default function Portal({ children }) {
  const pathname = usePathname();
  const { isSignedIn } = useUser()


  return (
    <>
    {isSignedIn ?
    (
      <main>
        <Main>{children}</Main>
        </main>
    )
      :
    (
      <SignInPage />
    )
    }
    </>
  );
}
