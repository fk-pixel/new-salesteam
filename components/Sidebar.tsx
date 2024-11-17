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
        className="text-base font-normal text-black bg-gray-50"
        items={[
          {
            key: "1",
            icon: <AppstoreOutlined />,
            label: "Dashboard",
            onClick: () => window.location.assign("/dashboard"),
          },
          {
            key: "2",
            icon: <FormOutlined />,
            label: "Order",
            onClick: () => window.location.assign("/order"),
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
