import { message } from "antd";
import callApi, {
  callQueryString,
  handleCallApi,
  handleCallApiSetToken,
  handleCallDelete,
} from "./apiCaller";

export const findRequestCategory = (apiRequest, dataResponse) => {
  return handleCallApi(apiRequest, "GET").then((res) => {
    if (res) {
      dataResponse.setList(res.categories);
    }
  });
};

export const selectDataOptionCategory = (apiRequest, listOption) => {
  return handleCallApi(apiRequest, "GET").then((res) => {
    if (res) {
      const options = res.categories.reduce((cur, item) => {
        cur.push({ value: item.category, label: item.category });
        return cur;
      }, []);
      listOption(options);
    }
  });
};

export const findRequestProduct = (apiRequest, dataResponse) => {
  return handleCallApi(apiRequest, "GET").then((res) => {
    if (res) {
      dataResponse.setList(res.products);
      dataResponse.setTotalPage(res.summary.count);
    }
  });
};

export const createProduct = (apiRequest, value, dataResponse) => {
  return handleCallApi(apiRequest, "POST", value).then((res) => {
    if (res) {
      dataResponse.createData(res);
    }
  });
};

export const createOrderNew = (apiRequest, value) => {
  return handleCallApi(apiRequest, "POST", value).then((res) => {
    if (res) {
      return res;
    }
  });
};

export const getOrderById = (apiRequest) => {
  return handleCallApi(apiRequest, "GET").then((res) => {
    if (res) {
      console.log(res);
      return res;
    }
  });
};

export const orderProduct = (apiRequest, value) => {
  return handleCallApi(apiRequest, "POST", value).then((res) => {
    if (res) {
      return res;
    }
  });
};

export const deleteProduct = (apiRequest, dataResponse) => {
  return handleCallApi(apiRequest, "DELETE").then((res) => {
    if (res) {
    }
  });
};

// AUTH

export const login = (apiRequest, value, history) => {
  return handleCallApi(apiRequest, "POST", value).then((res) => {
    if (res.access_token) {
      message.success("Logged in successfully");
      history.push("/user");
      localStorage.setItem("token", res.access_token);
    } else {
      message.error("Login failed");
      localStorage.removeItem("token");
    }
  });
};

export const signUp = (apiRequest, value) => {
  return handleCallApi(apiRequest, "POST", value).then((res) => {
    if (res) {
      message.success("Account successfully created");
    } else {
      message.error("Account creation failed");
    }
  });
};

export const token = (apiRequest, token) => {
  return handleCallApiSetToken(apiRequest, "GET", token).then((res) => {});
};

export const findListOrder = (apiRequest, dataResponse) => {
  return handleCallApiSetToken(apiRequest, "GET").then((res) => {
    if (res) {
      dataResponse.setList(res.orders);
    }
  });
};

export const buyOrder = (apiRequest) => {
  return handleCallApiSetToken(apiRequest, "POST").then((res) => {
    if (res) {
    }
  });
};

export const orderConfirmation = (apiRequest) => {
  return handleCallApiSetToken(apiRequest, "POST").then((res) => {
    if (res) {
    }
  });
};

export const deleteProductByOrder = (apiRequest, callBack) => {
  return handleCallDelete(apiRequest, "DELETE").then((res) => {
      callBack();
  });
};
