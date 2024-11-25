import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PoweroffOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout, Button, Dropdown, Badge } from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/navigation";

import Sidebar from "../components/Sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Main = ({ children }) => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 426) {
      setCollapsed(true);
    }
  }, []);

  return (
    <Layout className="h-screen w-full flex flex-row">
      {/* SIDEBAR */}
      <Sider
        className={
          collapsed ? "max-md:hidden bg-sky-800" : "visible sider bg-sky-800"
        }
        theme="light"
        trigger={null}
        collapsible
        onCollapse={(value) => setCollapsed(value)}
        collapsed={collapsed}
      >
        <Sidebar collapsed={collapsed} />
      </Sider>

      <Layout>
        {/* APPBAR */}
        <Header
          style={{
            marginLeft: 4,
            marginBottom: 4,
            marginTop: 2,
            padding: 0,
            background: "white",
          }}
        >
          <div className="flex flex-row justify-between">
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  zIndex: 999,
                }}
              />
            </div>
            <div className="flex content-center justify-end p-4">
            <Badge count={5} size="small">
              <BellOutlined className="text-2xl" onClick={() => router.push("/messages")} />
            </Badge>
              <SignedIn>
                <UserButton showName/>
              </SignedIn>
            </div>
          </div>
        </Header>

        {/* CONTENT */}
        <Content className="h-full overflow-scroll bg-white min-h-[280]">{children}</Content>

        {/* FOOTER */}
        <Footer className="text-center pt-0">
          Copyright 2024 © ALL RIGHTS RESERVED. Design by{" "}
          <a href="" target="_blank" rel="noreferrer">
            SalesTeam Support
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
