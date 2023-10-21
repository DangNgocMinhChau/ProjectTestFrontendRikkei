import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useList from "../../../core/useCustomHook/useList";
import {
  Pagination,
  Table,
  Card,
  Button,
  Tooltip,
  Popconfirm,
  message,
} from "antd";
import SearchProduct from "./searchProduct";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import FormProduct from "./formProduct";
import {
  findProductByCategory,
  product,
  products,
} from "../../../constants/api";
import {
  createProduct,
  deleteProduct,
  findRequestProduct,
} from "../../../util/handleRequest";
import TableProduct from "./tableProduct";
export default function PageProduct(props) {
  const dataResponse = useList();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [checkSearch, setCheckSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState({});
  const [checkForm, setCheckForm] = useState(false);

  // CAll API

  useEffect(() => {
    findRequestProduct(
      `${products}?limit=${limit}&skip=${currentPage}`,
      dataResponse
    );
  }, [limit, currentPage]);

  const handleSearchProducts = (value) => {
    setValueSearch(value);
    findRequestProduct(
      `${findProductByCategory}/${value.category}/products?limit=${
        value.limit ? value.limit : "10"
      }&skip=${value.skip ? value.skip : "1"}`,
      dataResponse
    );
  };

  const handleChangePage = (e) => {
    if (checkSearch) {
      handleSearchProducts({
        ...valueSearch,
        skip: e,
      });
    } else {
      setCurrentPage(e);
    }
  };

  const handleOpenForm = () => {
    setCheckForm(!checkForm);
    setCheckSearch(false);
  };

  const handleOpenSearch = () => {
    setCheckForm(false);
    setCheckSearch(!checkSearch);
  };

  const handleCreateProduct = (value) => {
    createProduct(product, value, dataResponse);
    setCheckForm(false);
  };

  const handleDelete = (id) => {
    deleteProduct(`${product}/${id}`, dataResponse);
    dataResponse.deleteData([id]);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    message.error("Click on No");
  };

  let arr = [];
  dataResponse.list()?.map((item, index) => {
    arr.push({
      key: index,
      name: item.name,
      category: item.category,
      id: item.id,
    });
  });

  return (
    <>
      <Card
        size="small"
        title="List Products"
        extra={
          <>
            <Tooltip title="Create">
              <Button
                onClick={() => handleOpenForm()}
                type="success"
                icon={<PlusOutlined />}
              />
            </Tooltip>
            <Tooltip title="search">
              <Button
                onClick={() => handleOpenSearch()}
                type="default"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </Tooltip>
          </>
        }
        style={{
          width: "100%",
        }}
      >
        {checkSearch && <SearchProduct onSearch={handleSearchProducts} />}
        {checkForm && checkForm ? (
          <FormProduct onSubmit={handleCreateProduct} />
        ) : (
          <>
            <TableProduct dataSource={arr} onDelete={handleDelete} onCancel={cancel}/>
            <Pagination
              onChange={(e) => {
                handleChangePage(e);
              }}
              defaultCurrent={1}
              total={dataResponse.totalPage()}
              size="small"
            />
          </>
        )}
      </Card>
    </>
  );
}
