import { Button, Card, Checkbox, Flex, Form, Input, Typography } from "antd";
import AuthLayout from "@/layouts/auth-layout";
import { LoginInput } from "@/interfaces/auth";
import { useLazyGetProfileQuery, useLoginMutation } from "@/redux/api/auth-api";
import { useEffect } from "react";

const Login = () => {
  const [form] = Form.useForm<LoginInput>();
  const [login, { isLoading }] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const onFinish = (values: LoginInput) => {
    login(values)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <AuthLayout>
      <Flex
        justify="center"
        vertical
        gap={5}
        align="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography.Title level={2} style={{ marginBottom: 20 }}>
          SMARTSCH
        </Typography.Title>
        <Card
          style={{
            width: 400,
            padding: 12,
          }}
          className="shadow"
        >
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
              Selamat Datang
            </Typography.Title>
            <Typography.Text type="secondary">
              Silahkan login untuk melanjutkan
            </Typography.Text>
          </div>

          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Email anda" name={"email"}>
              <Input placeholder="Masukkan email anda" className="shadow" />
            </Form.Item>

            <Form.Item label="Password" name={"password"}>
              <Input.Password
                placeholder="Masukkan password anda"
                className="shadow"
              />
            </Form.Item>

            <Flex
              justify="space-between"
              align="middle"
              style={{ marginBottom: 24 }}
            >
              <div>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ingat saya</Checkbox>
                </Form.Item>
              </div>
              <div>
                <Typography.Link href="/forgot-password">
                  Lupa password?
                </Typography.Link>
              </div>
            </Flex>
            <Button type="primary" block htmlType="submit" loading={isLoading}>
              Masuk
            </Button>
          </Form>

          <div style={{ marginTop: 20, textAlign: "center" }}>
            <Typography.Text>
              Belum punya akun?{" "}
              <Typography.Link href="/register">
                {" "}
                Daftar sekarang
              </Typography.Link>
            </Typography.Text>
          </div>
        </Card>
      </Flex>
    </AuthLayout>
  );
};

export default Login;
