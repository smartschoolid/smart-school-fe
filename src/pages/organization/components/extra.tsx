import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

interface ExtraProps {
  openOrganizationForm: () => void;
}
const Extra: React.FC<ExtraProps> = (props) => {
  return (
    <Space>
      <Input.Search placeholder="Search organization" className="shadow" />
      <Button icon={<PlusOutlined />} onClick={props.openOrganizationForm}>
        Organization
      </Button>
    </Space>
  );
};

export default Extra;
