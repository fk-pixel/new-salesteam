"use client";
import React from "react";
import {
  Button,
  Card,
  Input,
  InputNumber,
  DatePicker,
  Upload,
  AutoComplete,
  notification,
} from "antd";
import {
  DeleteOutlined,
  GiftOutlined,
  PlusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

interface OrderItemProps {
  id: string;
  itemType: "product" | "gift";
  itemName: string;
  itemFile: File | null;
  itemWidth: number;
  itemHeight: number;
  itemPrice: number;
  itemCount: number;
  itemMainType: string;
  itemSubType: string;
  itemCargoType: string;
}

interface OrderFormProps {
  id: string;
  orderItems: OrderItemProps[];
  cost: number;
  packagingCost: number;
  shippingCost: number;
  description: string;
  cargoLabel: File | null;
  status: string;
  orderPrice: number;
  created_at: string;
  created_by: string;
}

interface OpenNotificationProps {
  type: 'error' | 'success' | 'info' | 'warning';
  description: string;
  onClick: () => void;
}

const MAINTYPE_OPTIONS = [
  { value: "panel", label: "Panel" },
  { value: "roll", label: "Roll" },
  { value: "glas", label: "Glas" },
];

export const SUBTYPE_PANEL_OPTIONS = [
  { value: "thinHoop", label: "Thin Hoop" },
  { value: "normalHoop", label: "Normal Hoop" },
];

export const SUBTYPE_ROLL_OPTIONS = [
  { value: "normalRoll", label: "Normal Roll" },
  { value: "NonReflectiveRoll", label: "Non Reflective Roll" },
  { value: "coatedPaper", label: "Coated Paper" },
];

export const CARGOTYPE_OPTIONS = [
  { value: "singlePanel", label: "Single Panel" },
  { value: "twoPanels", label: "Two Panels" },
  { value: "threePanels", label: "Three Panels" },
  { value: "threeBalancedPanels", label: "Three Balanced Panels" },
  { value: "fourPanels", label: "Four Panels" },
  { value: "fivePanels", label: "Five Panels" },
  { value: "fiveBalancedPanels", label: "Five Balanced Panels" },
];

const openNotification = (description, type) : OpenNotificationProps => {
  notification.open({
    message: type === "error" ? "Error" : "Notification",
    type,
    showProgress: true,
    placement: "bottomRight",
    description,
    onClick: () => {},
  });
};

const OrderForm = () => {
  const [products, setProducts] = React.useState<OrderItemProps[]>([]);
  const [gifts, setGifts] = React.useState<OrderItemProps[]>([]);
  const [openCompleteOrder, setOpenCompleteOrder] = React.useState(false);

  const productLimit = 20;
  const giftLimit = 5;


  const addProductItem = () => {
    if (products.length >= productLimit) return;

    const newProduct = {
      id: crypto.randomUUID(),
      itemType: "product",
      itemName: "",
      itemFile: null,
      itemWidth: null,
      itemHeight: null,
      itemCount: null,
      itemSubType: "",
      itemCargoType: "",
      itemPrice: null,
      itemMainType: "",
    };

    setProducts([...products, newProduct]);
    openNotification("New product added successfully!","success",);
  };

  const addGiftItem = () => {
    if (gifts.length >= giftLimit) {

      openNotification("No more gift can be added. Limit is 5!", "error");
      return
    }

    const newGift = {
      id: crypto.randomUUID(),
      itemType: "gift",
      itemName: "",
      itemFile: null,
      itemWidth: null,
      itemHeight: null,
      itemCount: null,
      itemSubType: "",
      itemCargoType: "",
      itemPrice: null,
      itemMainType: "",
    };

    setGifts([...gifts, newGift]);
    openNotification("New gift added successfully!", "success");
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
    openNotification("This product removed successfully!", "success");
  };

  const removeGift = (index) => {
    setGifts(gifts.filter((_, i) => i !== index));
    openNotification("This gift removed successfully!", "success");
  };

  const updateProduct = (index, field, value) => {
    setProducts(
      products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      )
    );
  };

  const updateGift = (index, field, value) => {
    setGifts(
      gifts.map((gift, i) => (i === index ? { ...gift, [field]: value } : gift))
    );
  };

  const showOrderCard = products.length > 0 || gifts.length > 0

  return (
    <div className="p-1 overflow-scroll h-max-90dvh">
      {/* Add Buttons Group */}
      <div className="sticky z-50 flex justify-center items-center bg-white p-4">
        <Button
        icon={<PlusCircleOutlined className="h-6 w-6 mr-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-90" />}
        onClick={addProductItem}
        type="default"
        className="w-72 h-24 text-lg rounded-md shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Add Product
        </Button>
        <Button
          icon={<GiftOutlined className="h-6 w-6 mr-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-90" />}
          onClick={addGiftItem}
          type="default"
          className="w-72 h-24 text-lg rounded-md shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add Gift
        </Button>
      </div>
      {/* Product - Gif Cards */}
      <div className="flex justify-between space-x-4">
        <div className="space-y-4 w-full">
          {products.map((product, index) => (
            <Card
              key={index}
              title={`Product ${index + 1}`}
              className="bg-slate-100"
            >
              <div className="flex justify-between">
                <Input
                  placeholder="ID"
                  readOnly
                  value={product.id.split("-")[0]}
                  onChange={(e) => updateProduct(index, "id", e.target.value)}
                  className="mb-2 w-1/6"
                />
                <Input
                  placeholder="Name"
                  value={product.itemName}
                  onChange={(e) =>
                    updateProduct(index, "itemName", e.target.value)
                  }
                  className="mb-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <InputNumber
                  placeholder="Height"
                  value={product.itemHeight}
                  onChange={(value) =>
                    updateProduct(index, "itemHeight", value)
                  }
                  className="mb-2 w-full"
                />
                <InputNumber
                  placeholder="Width"
                  value={product.itemWidth}
                  onChange={(value) => updateProduct(index, "itemWidth", value)}
                  className="mb-2 w-full"
                />
                <InputNumber
                  placeholder="Count"
                  value={product.itemCount}
                  onChange={(value) => updateProduct(index, "itemCount", value)}
                  className="mb-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <AutoComplete
                  options={MAINTYPE_OPTIONS}
                  placeholder="Select a main type"
                  value={product.itemMainType}
                  onChange={(value) =>
                    updateProduct(index, "itemMainType", value)
                  }
                  className="mb-2 w-full"
                  filterOption={(inputValue, option) =>
                    option?.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                  optionRender={(option) => option.label}
                />
                <AutoComplete
                  options={
                    product.itemMainType === "panel"
                      ? SUBTYPE_PANEL_OPTIONS
                      : SUBTYPE_ROLL_OPTIONS
                  }
                  placeholder="Select a sub type"
                  value={product.itemSubType}
                  onChange={(value) =>
                    updateProduct(index, "itemSubType", value)
                  }
                  className="mb-2 w-full"
                  filterOption={(inputValue, option) =>
                    option?.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                  optionRender={(option) => option.label}
                />
                <AutoComplete
                  options={CARGOTYPE_OPTIONS}
                  placeholder="Select a cargo type"
                  value={product.itemCargoType}
                  onChange={(value) =>
                    updateProduct(index, "itemCargoType", value)
                  }
                  className="mb-2 w-full"
                  filterOption={(inputValue, option) =>
                    option.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                  optionRender={(option) => option.label}

                />
              </div>
              <Upload
                beforeUpload={() => false}
                onChange={({ file }) => updateProduct(index, "itemFile", file)}
                className="mb-2"
              >
                <Button icon={<UploadOutlined />}>Upload File Image</Button>
              </Upload>
              <Button
                onClick={() => removeProduct(index)}
                type="primary"
                className="absolute top-2 right-2 opacity-80 hover:opacity-100 transition-opacity bg-red-900 duration-300"
                icon={<DeleteOutlined />}
              >
                Delete Item
              </Button>
            </Card>
          ))}
        </div>
        <div className="space-y-4 w-full">
          {gifts.map((gift, index) => (
            <Card key={index} title={`Gift ${index + 1}`} className="">
              <div className="flex justify-between">
                <Input
                  placeholder="ID"
                  readOnly
                  value={gift.id.split("-")[0]}
                  onChange={(e) => updateGift(index, "id", e.target.value)}
                  className="mb-2 w-1/6"
                />
                <Input
                  placeholder="Name"
                  value={gift.itemName}
                  onChange={(e) =>
                    updateGift(index, "itemName", e.target.value)
                  }
                  className="mb-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <InputNumber
                  placeholder="Height"
                  value={gift.itemHeight}
                  onChange={(value) => updateGift(index, "itemHeight", value)}
                  className="mb-2 w-full"
                />
                <InputNumber
                  placeholder="Width"
                  value={gift.itemWidth}
                  onChange={(value) => updateGift(index, "itemWidth", value)}
                  className="mb-2 w-full"
                />
                <InputNumber
                  placeholder="Count"
                  value={gift.itemCount}
                  onChange={(value) => updateGift(index, "itemCount", value)}
                  className="mb-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <AutoComplete
                  options={MAINTYPE_OPTIONS}
                  placeholder="Select a main type"
                  value={gift.itemMainType}
                  onChange={(value) => updateGift(index, "itemMainType", value)}
                  className="mb-2 w-full"
                  filterOption={(inputValue, option) =>
                    option?.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                />
                <AutoComplete
                  options={
                    gift.itemMainType === "panel"
                      ? SUBTYPE_PANEL_OPTIONS
                      : SUBTYPE_ROLL_OPTIONS
                  }
                  placeholder="Select a sub type"
                  value={gift.itemSubType}
                  onChange={(value) => updateGift(index, "itemSubType", value)}
                  className="mb-2 w-full"
                  filterOption={(inputValue, option) =>
                    option?.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                />
                <AutoComplete
                  options={CARGOTYPE_OPTIONS}
                  placeholder="Select a cargo type"
                  value={gift.itemCargoType}
                  onChange={(value) =>
                    updateGift(index, "itemCargoType", value)
                  }
                  className="mb-2 w-full"
                  filterOption={(inputValue, option) =>
                    option.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                />
              </div>
              <Upload
                beforeUpload={() => false}
                onChange={({ file }) => updateGift(index, "itemFile", file)}
                className="mb-2"
              >
                <Button icon={<UploadOutlined />}>Upload File Image</Button>
              </Upload>
              <Button
                onClick={() => removeGift(index)}
                type="primary"
                className="absolute top-2 right-2 opacity-80 hover:opacity-100 transition-opacity bg-red-900 duration-300"
                icon={<DeleteOutlined />}
              >
                Delete Item
              </Button>
            </Card>
          ))}
        </div>
      </div>
      {/* Order Card */}
      {showOrderCard ? (
      <div className={`fixed bottom-0 right-0 w-full bg-sky-950 shadow-lg z-1000 h-${openCompleteOrder ? ['48rem'] : '16'} z-1000 shadow-lg`}>
<div className="my-8 mx-4">

        <Button
        type="link"
        className={`h-30 text-zinc-300 text-xl pl-16 pb-0 pt-${openCompleteOrder ? 0 : 12} w-full flex justify-end`}
        onClick={()=>setOpenCompleteOrder(!openCompleteOrder)}>{openCompleteOrder ? "⇣ Close" : "⇡ Complete Order"}
        </Button>
          </div>
        {openCompleteOrder && (
          <div className="block space-y-4 p-4">

                <TextArea placeholder="Description" className="mb-2 w-full" rows={4} />
        <Upload
                beforeUpload={() => false}
                className="mb-2 w-full"
                >
                <Button icon={<UploadOutlined  className="w-full"/>}>Upload Cargo Label</Button>
              </Upload>
              <div className="flex justify-end">

       <div className="flex justify-end">
        <Button type="primary" className="w-72 h-24">Submit</Button>
        </div>
              </div>
        </div>
        )}
      </div>

      ) : <div></div>}
    </div>
  );
};

export default OrderForm;
