import { Table, Card, Space } from "antd";
import React, { useEffect } from "react";
import { findRequestCategory } from "../../../util/handleRequest";
import useList from "../../../core/useCustomHook/useList";
import { categories } from "../../../constants/api";

export default function PageCategori(props) {
  const dataResponse = useList();
  useEffect(() => {
    findRequestCategory(categories, dataResponse);
  }, []);

  const dataSource = dataResponse.list().reduce((arr, item, index) => {
    arr.push({
      key: index + 1,
      name: item.category,
    });
    return arr;
  }, []);

  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Category",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <Card
      size="small"
      title="Category"
      style={{
        width: "100%",
      }}
    >
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
}
