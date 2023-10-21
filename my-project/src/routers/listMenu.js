export const listMenu = [
  {
    name: "Catalog",
    type: "Menu",
    children: [
      {
        name: "Category",
        to: "/user/categorys",
        exact: true,
      },
      {
        name: "Products",
        to: "/user/products",
        exact: true,
      },
    ],
  },
  {
    name: "Order",
    type: "Menu",
    children: [
      {
        name: "List Order",
        to: "/user/buy/list",
        exact: true,
      },
      {
        name: "Order",
        to: "/user/buy/order",
        exact: true,
      },
    ],
  },
];
