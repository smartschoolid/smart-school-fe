import { Alert, Button, Drawer, Flex, Form, Input } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface OrganizationFormRef {
  open: (id?: string) => void;
}

const OrganizationForm = forwardRef((_, ref) => {
  const [open, setOpen] = useState(false);
  const [organizationId, setOrganizationId] = useState<string | undefined>();

  const title = organizationId ? "Edit Organization" : "New Organization";

  useImperativeHandle<unknown, OrganizationFormRef>(ref, () => ({
    open: (id?: string) => {
      setOpen(true);
      setOrganizationId(id);
    },
  }));

  const onClose = () => {
    setOpen(false);
  };

  const Footer = () => {
    return (
      <Flex justify="space-between">
        <Button onClick={onClose}>Cancel</Button>

        <Button type="primary">Save</Button>
      </Flex>
    );
  };

  return (
    <Drawer title={title} open={open} onClose={onClose} footer={<Footer />}>
      <Form layout="vertical">
        <Form.Item
          label="Nama Organisasi"
          name={"name"}
          rules={[{ required: true }]}
        >
          <Input placeholder="Nama Organisasi" className="shadow" />
        </Form.Item>

        <Form.Item
          label="Kontak Email"
          name={"email"}
          rules={[{ required: true }]}
        >
          <Input placeholder="Kontak Email" className="shadow" />
        </Form.Item>
        <Alert
          type="warning"
          message="Pastikan email yang digunakan valid"
          description={"Email akan digunakan sebagain akun admin"}
        />
      </Form>
    </Drawer>
  );
});

export default OrganizationForm;
