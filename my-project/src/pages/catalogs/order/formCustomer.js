import { Button, Form, Input } from "antd";
import React from "react";

export default function FormCustomer({handleCreateOrder}) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      name="nest-messages"
      onFinish={handleCreateOrder}
      style={{ width: "50%" }}
    >
      <Form.Item
        name="customer"
        label="Customer"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button
          style={{ float: "right", marginTop: "15px" }}
          type="primary"
          htmlType="submit"
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}
