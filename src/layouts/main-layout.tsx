import { Avatar, Button, Flex, Layout, Space } from "antd";
import HeaderLayout from "./header";
import Sidebar from "./sidebar";
import {
  BellOutlined,
  DownOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useRef } from "react";
import SchoolSelection, {
  SchoolSelectionRef,
} from "@/components/school-selection";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const schoolSelectRef = useRef<SchoolSelectionRef>(null);

  const token = localStorage.getItem("auth_token");
  const loginCheck = useCallback(() => {
    if (token === null && window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }, [token]);

  const openSchoolSelection = () => {
    schoolSelectRef.current?.open();
  };

  useEffect(() => {
    loginCheck();
  }, [loginCheck]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {token !== null ? (
        <>
          <Sidebar />
          <Layout
            style={{
              background: "#f7f7f7",
            }}
          >
            <HeaderLayout
              left={
                <Button onClick={openSchoolSelection}>
                  SMK Negeri 1 Gresik <DownOutlined />
                </Button>
              }
              right={
                <Space>
                  <Flex gap={3}>
                    <Button type="text" icon={<BellOutlined />} />
                    <Button type="text" icon={<SettingOutlined />} />
                  </Flex>
                  <Flex gap={5} align="center">
                    <Avatar
                      size={32}
                      icon={<UserOutlined />}
                      style={{ background: "#2094FF" }}
                    />
                    <div>
                      <div className="avatar-name">Muhamamd Irfan</div>
                      <small className="avatar-role">Developer</small>
                    </div>
                  </Flex>
                </Space>
              }
            />
            <Layout.Content style={{ padding: 20 }}>
              {props.children}
            </Layout.Content>
          </Layout>
        </>
      ) : (
        <></>
      )}
      <SchoolSelection ref={schoolSelectRef} />
    </Layout>
  );
};

export default MainLayout;
