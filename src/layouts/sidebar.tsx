import {
  CalendarOutlined,
  CheckCircleOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileOutlined,
  PayCircleFilled,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu, MenuProps } from "antd";
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
    console.log(path);
    return [path === "/" ? "dashboard" : path.replace("/", "").split("/")[0]];
  };

  return (
    <Layout.Sider
      style={{ height: "100vh" }}
      theme="light"
      width={230}
      className="sidebar"
    >
      <Flex vertical gap={10}>
        <div className="brand">SMARTSCH</div>
        <Menu
          theme="light"
          style={{ border: "none", background: "transparent" }}
          items={menus}
          selectedKeys={getSelectedKeys()}
        />
      </Flex>
    </Layout.Sider>
  );
};

export default Sidebar;
