import { Button, Card, Form, Input, Tabs, message } from "antd";
import React, { useEffect, useState } from "react";
import {
  buyOrder,
  createOrderNew,
  findRequestProduct,
  getOrderById,
  orderProduct,
} from "../../../util/handleRequest";
import { order, orderNew, products } from "../../../constants/api";
import useList from "../../../core/useCustomHook/useList";
import DetailOrder from "./detailOrder";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import FormOrder from "./formOrder";
import FormCustomer from "./formCustomer";

export default function PageOrder(props) {
  const [idOrder, setIdOrder] = useState();
  const [tabActicve, setTabActive] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(100);
  const [detaileOrder, setDetaileOrder] = useState();
  const dataResponse = useList();
  const history = useHistory();

  const options = dataResponse.list().reduce((cur, item) => {
    cur.push({ value: item.id, label: item.name });
    return cur;
  }, []);

  useEffect(() => {
    findRequestProduct(
      `${products}?limit=${limit}&skip=${currentPage}`,
      dataResponse
    );
  }, [limit, currentPage]);

  const onChange = (key) => {
    setTabActive(key.toString());
  };

  const handleCreateOrder = (value) => {
    createOrderNew(orderNew, value).then((res) => {
      setIdOrder(res.id);
    });
    setTabActive("2");
  };

  const handleBuyProduct = (values) => {
    values.listProduct.map((item) => {
      orderProduct(`${order}/${idOrder}/product`, item);
    });
    getOrderById(`${order}/${idOrder}`).then((res) => setDetaileOrder(res));
    setIdOrder(idOrder);
    setTabActive("3");
  };

  const handleBuy = () => {
    buyOrder(order + `/${idOrder}/place`);
    history.push("/user/buy/list");
    message.success("Added to cart");
    setTabActive("1");
  };

  const renderFormInfo = () => {
    return <FormCustomer handleCreateOrder={handleCreateOrder} />;
  };

  const renderFormProduct = () => {
    return <FormOrder handleBuyProduct={handleBuyProduct} options={options} />;
  };

  const renderDetailOrder = () => {
    return (
      <>
        <DetailOrder
          data={detaileOrder}
          setDetaileOrder={setDetaileOrder}
          idOrder={idOrder}
        />
        <Button
          style={{ float: "right", marginTop: "15px" }}
          type="primary"
          htmlType="submit"
          onClick={() => handleBuy()}
          disabled={tabActicve === "1" || tabActicve === "2"}
        >
          Next
        </Button>
      </>
    );
  };

  const items = [
    {
      key: "1",
      label: "Customer",
      children: renderFormInfo(),
    },
    {
      key: "2",
      label: "Products",
      children: renderFormProduct(),
    },
    {
      key: "3",
      label: "Buy",
      children: renderDetailOrder(),
      disabled: tabActicve === "1" || tabActicve === "2",
    },
  ];

  return (
    <>
      <Card
        size="small"
        title="Order my"
        style={{
          width: "100%",
        }}
      >
        <>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            activeKey={tabActicve}
          />
        </>
      </Card>
    </>
  );
}
