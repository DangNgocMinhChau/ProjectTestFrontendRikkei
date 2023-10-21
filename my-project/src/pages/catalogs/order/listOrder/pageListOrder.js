import { Button, Card, Drawer, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment"
import {
  deleteProduct,
  findListOrder,
} from "../../../../util/handleRequest";
import { order, orderMy } from "../../../../constants/api";
import useList from "../../../../core/useCustomHook/useList";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import DetailOrder from "../detailOrder";
import TableList from "./tableList";

export default function PageListOrder(props) {
  const [detaileOrder, setDetaileOrder] = useState();
  const [idOrder, setIdOrder] = useState();
  const [open, setOpen] = useState(false);
  const handleDelete = (id) => {
    deleteProduct(order + `/${id}`);
    dataResponse.deleteData([id]);
  };
  const cancel = (e) => {};
  const dataResponse = useList();

  useEffect(() => {
    findListOrder(orderMy, dataResponse);
  }, []);

  const handleShowDetail = (id) => {
    setIdOrder(id);
    setOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "customer",
      key: "customer",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Booking date ",
      dataIndex: "created",
      key: "created",
      render: (item, index) => (
        <p key={index}>{moment(item).format("LLLL")}</p>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item, index) => (
        <>
          <Button
            key={index}
            onClick={() => handleShowDetail(item.id)}
            size="small"
            shape="circle"
            info
          >
            <InfoCircleOutlined />
          </Button>
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
    <Card
      size="small"
      title="List Order"
      style={{
        width: "100%",
      }}
    >
      <Table dataSource={dataResponse.list()} columns={columns} />
      <TableList/>
      <>
        <Drawer
          title="Detail"
          width={"70%"}
          onClose={() => setOpen(!open)}
          open={open}
        >
          <DetailOrder data={detaileOrder} idOrder={idOrder} />
        </Drawer>
      </>
    </Card>
  );
}
