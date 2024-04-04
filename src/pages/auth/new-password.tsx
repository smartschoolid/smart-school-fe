import { Button, Card, Flex, Form, Input, Typography } from "antd";
import AuthLayout from "@/layouts/auth-layout";

const NewPassword: React.FC = () => {
  return (
    <AuthLayout>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: 400, padding: 12 }} className="shadow">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
              Password Baru
            </Typography.Title>
            <Typography.Text type="secondary">
              Silahkan masukkan password baru
            </Typography.Text>
          </div>

          <Form layout="vertical">
            <Form.Item label="Password Baru">
              <Input.Password
                placeholder="Masukkan password"
                className="shadow"
              />
            </Form.Item>

            <Form.Item label="Konfirmasi Password baru">
              <Input.Password
                placeholder="Masukkan password"
                className="shadow"
              />
            </Form.Item>
            <br />
            <Button type="primary" block className="shadow">
              Simpan
            </Button>
          </Form>
        </Card>
      </Flex>
    </AuthLayout>
  );
};

export default NewPassword;
