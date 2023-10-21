import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { selectDataOptionCategory } from "../../../util/handleRequest";
import { categories } from "../../../constants/api";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


export default function SearchProduct({onSearch}) {
  const [dataOption, setDataOption] = useState([]);
  const onFinish = (value) => {
    onSearch(value);
  };

useEffect(() => {
  selectDataOptionCategory(categories, setDataOption);
}, []);

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="limit"
        label="Limit"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="skip"
        label="Skip"
      >
        <Input />
      </Form.Item>
      <Form.Item name="category" label="Category">
        <Select
          style={{
            width: "100%",
          }}
          placeholder="Category"
          options={dataOption}
        />
      </Form.Item>
      
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
}
