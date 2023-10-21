import { Button, Popconfirm, Table } from "antd";
import React from "react";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import moment from "moment"

export default function TableList({ onDelete, onDetail,dataSource }) {
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
      render: (item, index) => <p key={index}>{moment(item).format("LLLL")}</p>,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item, index) => (
        <>
          <Button
            key={index}
            onClick={() => onDetail(item.id)}
            size="small"
            shape="circle"
            info
          >
            <InfoCircleOutlined />
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete?"
            onConfirm={() => onDelete(item.id)}
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
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}
