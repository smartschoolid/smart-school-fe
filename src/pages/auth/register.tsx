import { Alert, Button, Card, Flex, Form, Input, Typography } from "antd";
import AuthLayout from "@/layouts/auth-layout";

const Register: React.FC = () => {
  return (
    <AuthLayout>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography.Title level={2} style={{ marginBottom: 20 }}>
          SMARTSCH
        </Typography.Title>

        <Card style={{ width: 400, padding: 12 }} className="shadow">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
              Daftar
            </Typography.Title>
            <Typography.Text type="secondary">
              Silahkan daftar untuk melanjutkan
            </Typography.Text>
          </div>

          <Form layout="vertical">
            <Form.Item label="Nama Sekolah">
              <Input placeholder="Masukkan nama sekolah" className="shadow" />
            </Form.Item>

            <Form.Item label="Email">
              <Input placeholder="Masukkan email" className="shadow" />
            </Form.Item>
            <Alert
              type="info"
              message="Email akan digunakan sebagai username untuk login sebagai administrator"
            />
            <br />
            <Button type="primary" block className="shadow">
              Daftar
            </Button>
          </Form>
        </Card>
      </Flex>
    </AuthLayout>
  );
};

export default Register;
