import { Button, Space } from "antd";
import PageHeader from "@/components/page-header";
import MainLayout from "@/layouts/main-layout";

export default function Dashboard() {
  return (
    <MainLayout>
      <PageHeader
        title="Dashboard"
        subTitle="See factor on your dashboard"
        extra={
          <Space>
            <Button>Add</Button>
          </Space>
        }
      />
    </MainLayout>
  );
}
