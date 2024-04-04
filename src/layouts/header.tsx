import { Flex, Layout } from "antd";

interface HeaderLayoutProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = (props) => {
  return (
    <Layout.Header
      className="header"
      style={{
        padding: 0,
        background: "#fff",
        paddingLeft: 25,
        paddingRight: 25,
        height: 60,
      }}
    >
      <Flex justify="space-between" align="center" style={{ height: 60 }}>
        <div>{props.left}</div>
        <div>{props.right}</div>
      </Flex>
    </Layout.Header>
  );
};

export default HeaderLayout;
