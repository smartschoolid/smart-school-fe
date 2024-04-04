import { Alert, Button, Card, Flex, Form, Input, Typography } from "antd";
import AuthLayout from "@/layouts/auth-layout";

const ForgotPassword: React.FC = () => {
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
              Lupa Password
            </Typography.Title>
            <Typography.Text type="secondary">
              Silahkan melengkapi password baru
            </Typography.Text>
          </div>

          <Form layout="vertical">
            <Form.Item label="Email">
              <Input placeholder="Masukkan email" className="shadow" />
            </Form.Item>
            <Alert
              type="warning"
              message="Link reset password akan dikirim ke email anda"
              description="Pastikan email yang anda masukkan benar"
            />
            <br />
            <Button type="primary" block className="shadow">
              Kirim
            </Button>
          </Form>
        </Card>
      </Flex>
    </AuthLayout>
  );
};

export default ForgotPassword;
