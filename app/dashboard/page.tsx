"use client";
import Image from "next/image";
import React from "react";
import { Input, Button, Card, Avatar, Box, Layout, Menu, theme } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export default function Dashboard() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    // <Layout>
    //   <Sider
    //     breakpoint="lg"
    //     collapsedWidth="0"
    //     style={siderStyle}
    //     onBreakpoint={(broken) => {
    //       console.log(broken);
    //     }}
    //     onCollapse={(collapsed, type) => {
    //       console.log(collapsed, type);
    //     }}
    //     trigger={null}
    //     collapsible
    //     collapsed={collapsed}
    //   >
    //     <div className="demo-logo-vertical" />
    //     <Menu
    //       theme="dark"
    //       mode="inline"
    //       defaultSelectedKeys={["4"]}
    //       items={items}
    //     />
    //   </Sider>
    //   <Layout style={{ marginInlineStart: 200 }}>
    //     <Header className="bg-sky-950 p-0">
    //       {" "}
    //       <Button
    //         type="primary"
    //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         onClick={() => setCollapsed(!collapsed)}
    //         style={{
    //           fontSize: "16px",
    //           width: 64,
    //           height: 64,
    //         }}
    //       />
    //     </Header>
    //     <Content style={{ margin: "24px 16px 0" }}>
    //       <div
    //         style={{
    //           padding: 24,
    //           textAlign: "center",
    //           background: "lightgrey",
    //           borderRadius: 2,
    //         }}
    //       >
    //         <p>long content</p>
    //         {
    //           // indicates very long content
    //           Array.from({ length: 100 }, (_, index) => (
    //             <React.Fragment key={index}>
    //               {index % 20 === 0 && index ? "more" : "..."}
    //               <br />
    //             </React.Fragment>
    //           ))
    //         }
    //       </div>
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       Ant Design ©{new Date().getFullYear()} Created by Ant UED
    //     </Footer>
    //   </Layout>
    // </Layout>

    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="h-14 m-1 bg-slate-400 w-full">SalesTeam</div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          // items={items}
        >
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <CarryOutOutlined />
            <span>Order</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UserOutlined />
            <span>Profile</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="p-0 bg-slate-900" />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "lightgrey",
              borderRadius: 2,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
