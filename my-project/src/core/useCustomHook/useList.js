import React, { useState } from "react";

export default function useList() {
  const [dataResponse, setDataResponse] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [itemData, setItemData] = useState({});
  const [listOptions, setListOptions] = useState([]);
  const [itemFormAuto, setItemFormAuto] = useState({});
  const [arrFormAuto, setArrFormAuto] = useState([]);

  const handleUpdate = (item) => {
    let arr = [...dataResponse];
    arr[dataResponse.findIndex((i) => i?.id === item?.id)] = item;
    setDataResponse(arr);
  };

  const handleCreate = (item) => {
    setDataResponse(() => [...dataResponse, item]);
  };

  const handleDelete = (listId) => {
    let arr = [...dataResponse];
    listId.map((id, index) => {
      arr.splice(
        dataResponse.findIndex((i) => i.id === id),
        1
      );
      setDataResponse(arr);
    });
  };

  const handleSelect = (data) => {
    let arr = [];
    data.map((item, index) => {
      arr.push({ value: item.urlMapping, title: item.nameMenu });
    });
    setListOptions(arr);
  };

  const handleItemFormAuto = (data) => {
    setItemFormAuto(data && data[0]);
    setArrFormAuto(data && data[0] && JSON.parse(data[0]?.fieldMapform));
  };
  return {
    list: () => dataResponse,
    totalPage: () => totalPage,
    itemData: () => itemData,
    itemFormAuto: () => itemFormAuto,
    listOptions: () => listOptions,
    arrFormAuto: () => arrFormAuto,
    setList: (data) => {
      setDataResponse(data);
    },
    setListOptions: (data) => {
      handleSelect(data);
    },

    setTotalPage: (total) => {
      setTotalPage(total);
    },
    setItemData: (item) => {
      setItemData(item);
    },
    updateData: (item) => {
      handleUpdate(item);
    },
    createData: (item) => {
      handleCreate(item);
    },
    deleteData: (listId = []) => {
      handleDelete(listId);
    },

    setItemFormAuto: (data) => {
      handleItemFormAuto(data);
    },
  };
}
