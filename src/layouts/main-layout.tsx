import { Avatar, Button, Flex, Layout, Space } from "antd";
import HeaderLayout from "./header";
import Sidebar from "./sidebar";
import {
  BellOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout
        style={{
          background: "#f7f7f7",
        }}
      >
        <HeaderLayout
          left={<Button icon={<HomeOutlined />}>SMK Negeri 1 Gresik</Button>}
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
    </Layout>
  );
};

export default MainLayout;
