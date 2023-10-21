import { Menu } from "antd";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { listMenu } from "../../routers/listMenu";

const { SubMenu } = Menu;

function renderRouter(dataMenu, parentKey = 0) {
  return dataMenu.map((item, index) =>
    Array.isArray(item.children) && item.children.length > 0 ? (
      <SubMenu key={`${parentKey}-${index}`} title={item.name}>
        {renderRouter(item.children, `${parentKey}-${index}`)}
      </SubMenu>
    ) : (
      <Menu.Item key={`${parentKey}-${index}`}>
        <Link key={index} className="nav-link" to={item.to} exact={true}>
          <span>
            {" "}
            <i className="icon-menu-custom fa fa-circle"></i>
            {item.name}
          </span>
        </Link>
      </Menu.Item>
    )
  );
}

export default function MenuLeft(props) {
  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height:'100%'
        }}
      >
        {renderRouter(listMenu)}
      </Menu>
    </div>
  );
}
