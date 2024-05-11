import {
  DownOutlined,
  ExportOutlined,
  FilterOutlined,
  ImportOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Dropdown,
  Form,
  MenuProps,
  Select,
  Space,
} from "antd";
import dayjs from "dayjs";
import QueryString from "qs";
import { useNavigate } from "react-router-dom";

interface AttendanceFilter {
  class_name: string;
  lesson: string;
  date: dayjs.Dayjs;
}

const AttendanceFilter: React.FC = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm<AttendanceFilter>();
  const menuList: MenuProps["items"] = [
    {
      key: 0,
      label: "Import Absensi",
      icon: <ImportOutlined />,
    },
    {
      key: 1,
      label: "Export Absensi",
      icon: <ExportOutlined />,
    },
  ];

  const onFilter = () => {
    form.validateFields().then((values) => {
      const data = {
        ...values,
        date: values.date.format("DD/MM/YYYY"),
      };
      const qs = QueryString.stringify(data);
      window.history.pushState({}, "", `/attendance?${qs}`);
    });
  };

  return (
    <Space>
      <Form layout="inline" form={form}>
        <Space.Compact>
          <Form.Item name={"class_name"} style={{ marginRight: -1 }}>
            <Select
              placeholder="Pilih kelas"
              style={{ width: 200 }}
              className="shadow"
            >
              {["Kelas A", "Kelas B", "Kelas C"].map((className, index) => (
                <Select.Option key={index} value={className}>
                  {className}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name={"lesson"} style={{ marginRight: -1 }}>
            <Select
              placeholder="Pilih Mata Pelajaran"
              style={{ width: 200 }}
              className="shadow"
            >
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
          <Form.Item name={"date"} style={{ marginRight: -1 }}>
            <DatePicker
              placeholder="Pilih tanggal"
              style={{ width: 140 }}
              className="shadow"
            />
          </Form.Item>
          <Button icon={<FilterOutlined />} onClick={onFilter}>
            Filter
          </Button>
        </Space.Compact>
      </Form>

      <Button.Group>
        <Button
          icon={<PlusOutlined />}
          onClick={() => navigate("/attendance/new")}
        >
          Absensi
        </Button>
        <Dropdown
          trigger={["click"]}
          menu={{
            items: menuList,
          }}
        >
          <Button icon={<DownOutlined />} />
        </Dropdown>
      </Button.Group>
    </Space>
  );
};

export default AttendanceFilter;
