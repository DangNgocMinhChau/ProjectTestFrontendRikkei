import React, { useState } from "react";
import { Card, Modal } from "antd";
import { login, signUp } from "../../util/handleRequest";
import { APISignUp, APIlogin } from "../../constants/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import FormLogin from "./formLogin";

export default function PageLogin(props) {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogin = (values) => {
    login(APIlogin, values, history);
  };

  const handleSignUp = () => {
    setIsModalOpen(true);
  };
  const onSubmitSignUp = (values) => {
    signUp(APISignUp, values);
    setIsModalOpen(false);
  };
  return (
    <Card className="custom_card">
      <div className="form-control">
        <Card style={{ width: 600 }}>
          <FormLogin
            onSubmit={handleLogin}
            login={true}
            handleSignUp={handleSignUp}
          />
        </Card>
      </div>

      <Modal
        title={
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Sign up</h1>
        }
        open={isModalOpen}
        footer={false}
        onOk={false}
        onCancel={() => setIsModalOpen(false)}
        width="50%"
        size="large"
      >
        <FormLogin onSubmit={onSubmitSignUp} signUp={true} />
      </Modal>
    </Card>
  );
}
