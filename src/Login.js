import React from "react";
import { Form, Button, Input } from "antd";
import "antd/dist/antd.css";
import "./Globle.css";
function Login() {
  return (
    <div className="login_page">
      <div className="flex1">
        <img className="login_img1" src="/images/logopen.svg" alt=""></img>
        <p style={{ marginBottom: "" }} className="login_text">
          Welcome! Let’s get started where you left.
        </p>

        <img src="/images/logo.svg" alt=""></img>
      </div>
      <div className="flex2">
        <img className="phone_sec" src="/images/phonelog.svg" alt=""></img>
        <p className="login_title">Patient Tracker Login</p>

        <Form
          style={{ width: "100%" }}
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
            window.location.replace("/dashboard");
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <div className="inputs_login">
            <div className="input_lable">Email</div>
            <Form.Item
              className="  email_input"
              name="email"
              // label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                { type: "email", message: "Please enter a valid email" },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Email" />
            </Form.Item>
          </div>
          <div className="inputs_login">
            <div className="input_lable">Password</div>
            <Form.Item
              name="password"
              // label="Password"
              rules={[
                {
                  required: true,
                },
                { min: 8 },
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(""),
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
          </div>

          <Form.Item wrapperCol={{ span: 24 }}>
            <div style={{ textAlign: "center" }}>
              <Button className="login_btn" htmlType="submit">
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
