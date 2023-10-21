import { message } from "antd";
import axios from "axios";
import queryString from "query-string";



export default function callApi(url, method = "GET", body) {
  return axios({
    method: method,
    url: url,
    // data: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const callQueryString = (url, body) => {
  return queryString.stringifyUrl({
    url: url,
    query: body,
  });
};

export const handleCallApi = (url, method = "GET", value) => {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  };

  return fetch(url, requestOptions).then((response) => {
    if (response) {
     return response.json();
    }
  });
};

export const handleCallDelete = (url, method = "GET", value) => {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  };

  return fetch(url, requestOptions).then((res) => {
      return res
  });
};

export const handleCallApiSetToken = (url, method = "GET") => {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    // body: JSON.stringify(value),
  };

  return fetch(url, requestOptions).then((response) => {
    if (response.status === 401) {
      localStorage.removeItem("token");
      message.warning("Please log in again")
    } else {
      return response.json();
    }
  });
};
