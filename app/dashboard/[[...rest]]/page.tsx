"use client";
import Image from "next/image";
import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  OrderedListOutlined,
  ProfileOutlined,
  DollarOutlined,
  LineChartOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Grid, Table, Avatar, Space, Button } from "antd";

const { useBreakpoint } = Grid;

export default function Dashboard() {
  const screens = useBreakpoint();

  const cardStyle = {
    height: 150,
    marginBottom: 16,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardsData = [
    {
      icon: <UserOutlined style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Users",
      data: "1,024",
      backgroundColor: "#1890ff",
    },
    {
      icon: (
        <ShoppingCartOutlined style={{ fontSize: "32px", color: "#fff" }} />
      ),
      title: "Orders",
      data: "512",
      backgroundColor: "#52c41a",
    },
    {
      icon: <DollarOutlined style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Revenue",
      data: "$15,432",
      backgroundColor: "#faad14",
    },
    {
      icon: <LineChartOutlined style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Growth",
      data: "15%",
      backgroundColor: "#f5222d",
    },
  ];

  return (
    <div style={{ padding: 20, height: "100%" }}>
      <Row gutter={16}>
        {cardsData.map((card, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              style={{
                backgroundColor: card.backgroundColor,
                height: 150,
                marginBottom: 16,
                color: "#fff",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>{card.icon}</div>
              <div style={{ fontSize: "18px", marginTop: 10 }}>
                {card.title}
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {card.data}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ marginTop: 2 }}>
        <DashboardTable />
        {/* <Row gutter={24}>
          {Array.from({ length: 8 }, (_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={`Grid Item ${index + 1}`}
                bordered={false}
                bodyStyle={{
                  height: 120,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Content
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    </div>
  );
}

const data = [
  {
    key: "1",
    id: "1",
    avatar: "https://via.placeholder.com/40",
    store: "Store One",
    products: 120,
    gifts: 10,
    cargoLabel: "FastCargo",
    cost: "$200",
    packagingCost: "$20",
    shippingCost: "$15",
    price: "$235",
    description: "High quality products",
    status: "Active",
    created_at: "2023-10-15",
    actions: "View",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (text) => <Avatar src={text} />,
  },
  {
    title: "Store",
    dataIndex: "store",
    key: "store",
  },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
  },
  {
    title: "Gifts",
    dataIndex: "gifts",
    key: "gifts",
  },
  {
    title: "Cargo Label",
    dataIndex: "cargoLabel",
    key: "cargoLabel",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Packaging Cost",
    dataIndex: "packagingCost",
    key: "packagingCost",
  },
  {
    title: "Shipping Cost",
    dataIndex: "shippingCost",
    key: "shippingCost",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button type="link">Edit</Button>
        <Button type="link" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

function DashboardTable() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

  const handleSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const onRowClick = (record) => {
    console.log("Row clicked:", record);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10, showSizeChanger: true }}
      onRow={(record) => ({ onClick: () => onRowClick(record) })}
      rowSelection={{ selectedRowKeys, onChange: handleSelectChange }}
    />
  );
}
