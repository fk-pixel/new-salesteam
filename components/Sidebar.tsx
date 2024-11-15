import React, { useEffect } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

import imgLogo from "../public/T.png";

const Sidebar = ({ collapsed }) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <Image src={imgLogo} width={200} height={200} />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[1]}
        className="text-base font-normal text-black bg-slate-300"
      >
        <Menu.Item key="1">
          <Link href="/dashboard">
            {collapsed ? <AppstoreOutlined /> : <span>Dashboard</span>}
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/order">
            {collapsed ? <FormOutlined /> : <span>Order</span>}
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
