import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Steps,
  Typography,
} from "antd";
import AuthLayout from "@/layouts/auth-layout";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { RegisterInput } from "@/interfaces/auth";

const Register: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm<RegisterInput>();
  const [companyInfo, setCompanyInfo] = useState<RegisterInput>();

  const next = () => {
    form.validateFields().then((values) => {
      setCompanyInfo(values);
      setCurrent(1);
    });
  };

  const register = () => {
    form
      .validateFields()
      .then((values) => {
        const final: RegisterInput = { ...companyInfo, ...values };
        console.log(final);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

        <Card style={{ width: 450, padding: 12 }} className="shadow">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <Typography.Title level={4} style={{ margin: 0, padding: 0 }}>
              Daftar
            </Typography.Title>
            <Typography.Text type="secondary">
              Silahkan daftar untuk melanjutkan
            </Typography.Text>
          </div>

          <div>
            <Steps
              current={current}
              items={[
                {
                  title: "Informasi Sekolah",
                },
                {
                  title: "Data User",
                },
              ]}
            />
            <br />
          </div>

          <Form layout="vertical" form={form}>
            {current === 0 ? (
              <>
                <Form.Item label="Nama Sekolah" name={"company_name"}>
                  <Input
                    placeholder="Masukkan nama sekolah"
                    className="shadow"
                  />
                </Form.Item>

                <Form.Item label="Phone Number" name={"phone_number"}>
                  <Input
                    placeholder="Masukkan nomor telepon"
                    className="shadow"
                  />
                </Form.Item>
                <br />

                <Button type="primary" block className="shadow" onClick={next}>
                  Lanjut <ArrowRightOutlined />
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Divider>Informasi User</Divider>
                <Row gutter={15}>
                  <Col span={12}>
                    <Form.Item label="Nama Depan" name={"first_name"}>
                      <Input
                        placeholder="Masukkan nama depan"
                        className="shadow"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item label="Nama Belakang" name={"last_name"}>
                      <Input
                        placeholder="Masukkan nama belakang"
                        className="shadow"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Email" name={"email"}>
                  <Input placeholder="Masukkan email" className="shadow" />
                </Form.Item>
                <Form.Item label="Kata Sandi" name={"password"}>
                  <Input.Password
                    placeholder="Masukkan Password"
                    className="shadow"
                  />
                </Form.Item>
                <Alert
                  type="info"
                  message="Email akan digunakan sebagai user untuk login sebagai administrator"
                />
                <br />
                <Button
                  type="primary"
                  block
                  className="shadow"
                  onClick={register}
                >
                  Daftar
                </Button>
              </>
            )}
          </Form>
        </Card>
      </Flex>
    </AuthLayout>
  );
};

export default Register;
