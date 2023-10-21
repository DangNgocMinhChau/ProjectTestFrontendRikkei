import { Button, Form, Input, Select, Space } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function FormOrder({handleBuyProduct,options}) {
  return (
    <div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={handleBuyProduct}
        style={{
          maxWidth: 800,
        }}
        autoComplete="off"
      >
        <Form.List name="listProduct">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item {...restField} name={[name, "productId"]}
                   rules={[
                    {
                      required: true,
                      message: "Please input product!",
                    },
                  ]}
                  >
                    <Select
                      //   mode="tags"
                      style={{
                        width: "500px",
                      }}
                      placeholder="Product"
                      options={options}
                      showSearch
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    style={{
                      width: "100px",
                    }}
                    name={[name, "amount"]}
                    rules={[
                        {
                          required: true,
                          message: "Please input quantity!",
                        },
                      ]}
                  >
                    <Input placeholder="Amount" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  
                  icon={<PlusOutlined />}
                >
                  Add products
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button
            style={{ float: "right", marginTop: "15px" }}
            type="primary"
            htmlType="submit"
          >
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
