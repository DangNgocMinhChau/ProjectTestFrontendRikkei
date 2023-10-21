import {
  Descriptions,
  Button,
  Popconfirm,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { order } from "../../../constants/api";
import {
  deleteProductByOrder,
  getOrderById,
} from "../../../util/handleRequest";

export default function DetailOrder({ data, idOrder }) {
  const [detailOrder, setDetaileOrder] = useState([data]);
  const [listOrder, setListOrder] = useState();
  const [idProduct, setIdProduct] = useState();

  useEffect(() => {
    getOrderById(`${order}/${idOrder}`).then((res) => setDetaileOrder(res));
  }, []);

  const callBack = () => {
    getOrderById(`${order}/${idOrder}`).then((res) => setDetaileOrder(res));
  };
  const handleDelete = (id) => {
    setIdProduct(id);
    deleteProductByOrder(`${order}/${idOrder}/product/${id}`, callBack);
  };

  const cancel = (e) => {};
  useEffect(() => {
    let arr = [];
    detailOrder?.items?.map((item, index) => {
      arr.push({
        ...item,
        index: index + 1,
      });
    });
    if (detailOrder?.summary?.totalItems > 0) {
      arr.push({
        price: detailOrder?.summary?.totalCost
          ? detailOrder?.summary?.totalCost + "$"
          : "",
        amount: detailOrder?.summary?.totalItems,
      });
    } else {
      arr = null;
    }

    setListOrder(arr);
  }, [detailOrder, data]);

  const renderTableProduct = () => {
    const columns = [
      {
        title: "No",
        dataIndex: "index",
        key: "index",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Category",
        dataIndex: "category",
        key: "category",
      },

      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: (item, index) => (
          <>
            <Popconfirm
              title="Delete"
              description="Are you sure to delete?"
              onConfirm={() => handleDelete(item.id)}
              onCancel={() => cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                style={{ marginLeft: "15px" }}
                size="small"
                shape="circle"
                danger
              >
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </>
        ),
      },
    ];

    return (
      <>
        <Table columns={columns} dataSource={listOrder} pagination={false} />
      </>
    );
  };

  const itemDetail = [
    {
      key: "1",
      label: "Customer",
      children: (
        <>
          <p>- Name : {detailOrder && detailOrder?.order?.customer}</p>
          <p>- Address : {detailOrder && detailOrder?.order?.address}</p>
        </>
      ),
      span: 3,
    },
    {
      key: "2",
      label: "Product",
      children: renderTableProduct(),
      span: 3,
    },
  ];

  return listOrder ? (
    <>
      <Descriptions
        title={listOrder?.order?.customer}
        bordered
        items={itemDetail}
      />
    </>
  ) : (
    "No data found"
  );
}
