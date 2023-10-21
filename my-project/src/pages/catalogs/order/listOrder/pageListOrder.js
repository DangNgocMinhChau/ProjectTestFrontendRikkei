import { Button, Card, Drawer, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  findListOrder,
} from "../../../../util/handleRequest";
import { order, orderMy } from "../../../../constants/api";
import useList from "../../../../core/useCustomHook/useList";
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
  const dataResponse = useList();

  useEffect(() => {
    findListOrder(orderMy, dataResponse);
  }, []);

  const handleShowDetail = (id) => {
    setIdOrder(id);
    setOpen(true);
  };

  return (
    <Card
      size="small"
      title="List Order"
      style={{
        width: "100%",
      }}
    >
      <TableList dataSource={dataResponse.list()} onDetail={handleShowDetail} onDelete= {handleDelete}/>
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
