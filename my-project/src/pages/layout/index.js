import React from "react";

import { Button, Layout } from "antd";
import MenuLeft from "./menuLeft";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const { Header, Content, Footer, Sider } = Layout;

export default function LayoutAdmin({ children }) {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            marginBottom: "15px",
          }}
        >
          <Button
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Layout>
            <Sider width={200}>
              <MenuLeft />
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          My Store
        </Footer>
      </Layout>
    </div>
  );
}
