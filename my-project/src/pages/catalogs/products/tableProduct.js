import { Button, Popconfirm, Table } from "antd";
import React from "react";

export default function TableProduct({dataSource,onDelete,onCancel}) {
    const columns = [
        {
          title: "No.",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Category",
          dataIndex: "category",
          key: "name",
        },
        {
          title: "Action",
          dataIndex: "",
          key: "x",
          render: (item, index) => (
            <Popconfirm
              key={index}
              title="Delete"
              description="Are you sure to delete?"
              onConfirm={() => onDelete(item.id)}
              onCancel={() => onCancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          ),
        },
      ];

  return (
    <div>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
}
