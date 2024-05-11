import {
  CalendarOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileOutlined,
  HomeOutlined,
  LogoutOutlined,
  PayCircleFilled,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const menus: MenuProps["items"] = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dasbor",
      onClick: () => navigate("/"),
    },
    {
      key: "organization",
      icon: <HomeOutlined />,
      label: "Organisasi",
      onClick: () => navigate("/organization"),
    },
    {
      key: "report",
      icon: <FileOutlined />,
      label: "Laporan",
      onClick: () => navigate("/report"),
    },
    {
      key: "payment",
      icon: <PayCircleFilled />,
      label: "Pembayaran",
    },
    { type: "divider" },
    {
      key: "attendance",
      icon: <CheckCircleOutlined />,
      label: "Absensi",
      onClick: () => navigate("/attendance"),
    },
    {
      key: "schedule",
      icon: <CalendarOutlined />,
      label: "Jadwal",
    },
    {
      key: "database",
      icon: <DatabaseOutlined />,
      label: "Database",
    },
    {
      type: "divider",
    },
    {
      key: "user",
      icon: <UserSwitchOutlined />,
      label: "Pengguna",
    },
    {
      key: "setting",
      icon: <SettingOutlined />,
      label: "Pengaturan",
    },
  ];

  const getSelectedKeys = () => {
    const path = window.location.pathname;
    return [path === "/" ? "dashboard" : path.replace("/", "").split("/")[0]];
  };

  return (
    <Layout.Sider
      style={{ height: "100vh" }}
      theme="light"
      width={230}
      className="sidebar"
    >
      <Flex vertical justify="space-between" style={{ height: "100vh" }}>
        <Flex vertical gap={5}>
          <div className="brand">SMARTSCH</div>
          <Menu
            theme="light"
            style={{ border: "none", background: "transparent" }}
            items={menus}
            selectedKeys={getSelectedKeys()}
          />
        </Flex>

        <div style={{ margin: 20 }}>
          <Button block icon={<LogoutOutlined />}>
            Keluar
          </Button>
        </div>
      </Flex>
    </Layout.Sider>
  );
};

export default Sidebar;
