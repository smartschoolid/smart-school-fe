import { Layout } from "antd";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <Layout
      style={{
        background: "#F5F5F5",
        minHeight: "100vh",
      }}
    >
      {props.children}
    </Layout>
  );
};

export default AuthLayout;
