import PageHeader from "@/components/page-header";
import MainLayout from "@/layouts/main-layout";
import Extra from "./components/extra";
import OrganizationForm, {
  OrganizationFormRef,
} from "./drawer/organization-form";
import { useRef } from "react";

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
      </MainLayout>

      <OrganizationForm ref={organizationFormRef} />
    </>
  );
};

export default Organization;
