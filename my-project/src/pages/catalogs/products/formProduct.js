import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import {
  findRequestCategory,
  selectDataOptionCategory,
} from "../../../util/handleRequest";
import { categories } from "../../../constants/api";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function FormProduct({ onSubmit }) {
  const [dataOption, setDataOption] = useState([]);

  const onFinish = (value) => {
    onSubmit(value);
  };

  useEffect(() => {
    selectDataOptionCategory(categories, setDataOption);
  }, []);



  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: "100%" }}
    >
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <Input />
      </Form.Item>
      <Form.Item name="manufacturer" label="Manufacturer">
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
      <Form.Item name="description" label="Description">
        <Input />
      </Form.Item>
      <Form.Item name="tags" label="Tags">
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}
