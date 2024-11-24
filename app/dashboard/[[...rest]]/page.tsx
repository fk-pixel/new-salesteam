"use client";
import Image from "next/image";
import React from "react";
import Icon, {
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
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  SaveOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  CheckOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Grid, Table, Avatar, Space, Button, Dropdown, Menu, Input, AutoComplete } from "antd";

const { useBreakpoint } = Grid;

// Custom hook to get window dimensions
function useWindowSize() {
  const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);
  React.useLayoutEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

export const STATUS_OPTIONS = [
  { value: 'canceledAfterProduction', label: '🔴 Canceled after production' },
  { value: 'canceledBeforeProduction', label: '🟠 Canceled before production' },
  { value: 'sentToProduction', label: '🟡 Sent to production' },
  { value: 'shipped', label: '🟢 Shipped' },
];




export default function Dashboard() {
  const screens = useBreakpoint();

  const initialData = [
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
      status: 'shipped',
      created_at: "2023-10-15",
      actions: "View",
    },
  ];

  const [data, setData] = React.useState(initialData);
  const [editingCell, setEditingCell] = React.useState({ key: null, field: null });

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    setEditingKey(record.key);
  };

  const save = (key) => {
    setEditingKey("");
    // Here you would typically also handle saving changes back to your server or state
  };

  const cancel = () => {
    setEditingKey("");
  };

  const handleCellClick = (key, field) => {
    setEditingCell({ key, field });
  };

  const handleChange = (key, field, value) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setData(newData);
  };

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

  const renderEditableCell = (text, record, field) => {
    const isEditing = editingCell.key === record.key && editingCell.field === field;
    return isEditing ? (
      field === "status" ? (
        <AutoComplete
        options={STATUS_OPTIONS}
        placeholder=""
        value={text}
        onChange={(value) =>
          handleChange(record.key, field, value)
        }
        //op={<CheckOutlined />}
        onBlur={() => setEditingCell({ key: null, field: {} })}
        optionRender={(option) => option.label}
        className="w-full"
        style={{ width: "100%" }}
      >
          {/* <Input suffix={<Button type="primary"><CheckOutlined type="search" /></Button>} /> */}
          <Input />

      </AutoComplete>
      ) : (

        <Input
          value={text}
          onChange={(e) => handleChange(record.key, field, e.target.value)}
          onBlur={() => setEditingCell({ key: null, field: null })}
          autoFocus
          className="w-fit"
        />
      )
    ) : (
      <div
        onClick={() => handleCellClick(record.key, field)}
        style={{ cursor: 'pointer' }}
      >
        {text}
      </div>
    );
  };

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
      editable: true,
      render: (text, record) => renderEditableCell(text, record, "cost"),
    },
    {
      title: "Packaging Cost",
      dataIndex: "packagingCost",
      key: "packagingCost",
      render: (text, record) => renderEditableCell(text, record, "packagingCost"),
    },
    {
      title: "Shipping Cost",
      dataIndex: "shippingCost",
      key: "shippingCost",
      render: (text, record) => renderEditableCell(text, record, "shippingCost"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => renderEditableCell(text, record, "price"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record) => renderEditableCell(text, record, "description"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => renderEditableCell(text, record, "status"),
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
          <Button type="link" icon={<SaveOutlined />} />
          <Button type="link" icon={<DeleteOutlined />} danger />
          <Dropdown
            overlay={<MoreActionsMenu record={record} />}
            trigger={['click']}
          >
            <Button type="link" icon={<MoreOutlined />} />
          </Dropdown>
        </Space>
      ),
    },
  ];

  function DashboardTable() {
    const [windowWidth, windowHeight] = useWindowSize();

    const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

    const handleSelectChange = (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    };

    const onRowClick = (record) => {
      console.log("Row clicked:", record);
    };

    return (
      <>
       <Toolbar />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10,
           showSizeChanger: true,
           position: ['bottomRight'],
          className: 'fixed bottom-20 right-12 z-10',
           }}
        onRow={(record) => ({ onClick: () => onRowClick(record) })}
        rowSelection={{ selectedRowKeys, onChange: handleSelectChange }}
        // scroll={{
        //   y: windowHeight - 300, // Adjust height based on window size, subtract extra space as needed
        // }}
        style={{
          maxWidth: '100%',
        }}
        />
      </>
    );
  }

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
      </div>
    </div>
  );
}

// Toolbar component
const Toolbar = () => (
  <div style={{
    border: '1px solid lightgrey',
    backgroundColor: 'white',
    padding: '10px 20px',
    marginBottom: '2rem',
    borderRadius: '4px',
  }}>
    <Space>
      <Button
        icon={<FileExcelOutlined />}
        onClick={() => message.info("Create Excel clicked")}
      >
        Create Excel
      </Button>
      <Button
        icon={<PrinterOutlined />}
        onClick={() => message.info("Print Cargo Label clicked")}
      >
        Print Cargo Label
      </Button>
    </Space>
  </div>
);

// Menu for more actions
const MoreActionsMenu = ({ record }) => (
  <Menu
    onClick={({ key }) => {
      message.info(`Action ${key} clicked for id: ${record.id}`);
    }}
  >
    <Menu.Item key="action1">
      <Button type="text" icon={<MailOutlined />}> Send Email to Manufacturer</Button>
    </Menu.Item>
    <Menu.Item key="action2">
    <Button type="text" icon={<EditOutlined />}> Edit Order Items</Button>
    </Menu.Item>
    <Menu.Item key="action3">
    <Button type="text" icon={<QuestionCircleOutlined />}> Get Support</Button>
    </Menu.Item>
  </Menu>
);





