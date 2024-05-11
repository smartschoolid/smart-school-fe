import PageHeader from "@/components/page-header";
import MainLayout from "@/layouts/main-layout";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  List,
  Radio,
  Row,
  Select,
} from "antd";

const CreateAttendance: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  };

  return (
    <MainLayout>
      <PageHeader title="Create Attendance" />

      <br />
      <div style={{ width: 1000, margin: "auto" }}>
        <Card title="Form Absensi" className="shadow">
          <Form layout="vertical" form={form}>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item name={"class_name"} label="Kelas">
                  <Select placeholder="Pilih kelas" className="shadow">
                    {["Kelas A", "Kelas B", "Kelas C"].map(
                      (className, index) => (
                        <Select.Option key={index} value={className}>
                          {className}
                        </Select.Option>
                      )
                    )}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name={"lesson"} label="Mata Pelajaran">
                  <Select placeholder="Pilih Mata Pelajaran" className="shadow">
                    {[
                      "Pemrograman Dasar",
                      "Pemrograman Web",
                      "Pemrograman Mobile",
                    ].map((lesson, index) => (
                      <Select.Option key={index} value={lesson}>
                        {lesson}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name={"date"} label="Tanggal">
                  <DatePicker placeholder="Pilih tanggal" className="shadow" />
                </Form.Item>
              </Col>
            </Row>

            <Divider>Daftar Murid</Divider>
            <List
              dataSource={["Murid A", "Murid B", "Murid C", "Murid D"]}
              bordered
              className="shadow"
              style={{ background: "#fff" }}
              renderItem={(m, index) => {
                return (
                  <List.Item key={index}>
                    <Row gutter={16} align={"middle"} style={{ width: "100%" }}>
                      <Col span={10}>{m}</Col>
                      <Col span={14}>
                        <Row gutter={10} align={"middle"}>
                          <Col span={12}>
                            <Form.Item
                              name={["data", m, "status"]}
                              help={false}
                              initialValue={"H"}
                            >
                              <Radio.Group>
                                <Radio value={"H"}>H</Radio>
                                <Radio value={"I"}>I</Radio>
                                <Radio value={"S"}>S</Radio>
                                <Radio value={"A"}>A</Radio>
                              </Radio.Group>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={["data", m, "keterangan"]}
                              help={false}
                            >
                              <Input
                                placeholder="Keterangan"
                                className="shadow"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </List.Item>
                );
              }}
            />
          </Form>
        </Card>

        <br />
        <Flex justify="space-between">
          <Button>Cancel</Button>
          <Button type="primary" onClick={onFinish}>
            Simpan
          </Button>
        </Flex>
      </div>
    </MainLayout>
  );
};

export default CreateAttendance;
