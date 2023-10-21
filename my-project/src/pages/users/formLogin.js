import { Button, Form, Input } from "antd";
import React from "react";

export default function FormLogin({
  onSubmit,
  handleSignUp,
  login = false,
  signUp = false,
}) {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: "100%",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {login && (
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            type="default"
            onClick={() => handleSignUp()}
          >
            Sign up
          </Button>
        </Form.Item>
      )}

      {signUp && (
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button style={{float:'left'}} type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      )}
    </Form>
  );
}
