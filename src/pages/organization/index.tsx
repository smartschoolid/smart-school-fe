import PageHeader from "@/components/page-header";
import MainLayout from "@/layouts/main-layout";
import Extra from "./components/extra";
import OrganizationForm, {
  OrganizationFormRef,
} from "./drawer/organization-form";
import { useRef } from "react";
import { Avatar, Button, Flex, List, Space } from "antd";
import { organizations } from "@/dummy-data";
import {
  DeleteOutlined,
  EditOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  HomeFilled,
} from "@ant-design/icons";

const Organization: React.FC = () => {
  const organizationFormRef = useRef<OrganizationFormRef>();

  const openOrganizationForm = () => {
    organizationFormRef.current && organizationFormRef.current.open();
  };
  return (
    <>
      <MainLayout>
        <PageHeader
          title="Organization"
          subTitle="Manage your organization"
          extra={<Extra openOrganizationForm={openOrganizationForm} />}
        />

        <div style={{ width: 800, margin: "20px auto" }}>
          <List
            bordered
            style={{ background: "#fff" }}
            className="shadow"
            dataSource={organizations}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ width: "100%" }}
                >
                  <Flex gap={10} align="center">
                    <Avatar
                      size={40}
                      icon={<HomeFilled />}
                      className="bg-secondary shadow"
                      shape="square"
                    />
                    <div>
                      <strong>{item.name}</strong>
                      <br />
                      <small className="text-seondary">
                        <EnvironmentOutlined /> {item.address}
                      </small>
                    </div>
                  </Flex>

                  <div>
                    <Space>
                      <Button size="small" icon={<EyeOutlined />} />
                      <Button size="small" icon={<EditOutlined />} />
                      <Button size="small" icon={<DeleteOutlined />} />
                    </Space>
                  </div>
                </Flex>
              </List.Item>
            )}
          />
        </div>
      </MainLayout>

      <OrganizationForm ref={organizationFormRef} />
    </>
  );
};

export default Organization;
