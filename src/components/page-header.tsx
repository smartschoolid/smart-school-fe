import { Flex, Typography } from "antd";

interface PageHeaderProps {
  title: string;
  subTitle?: string;
  extra?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="page-header">
      <Flex justify="space-between" align="center">
        <div>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {props.title}
          </Typography.Title>
          {props.subTitle && (
            <Typography.Text type="secondary">
              <small>{props.subTitle} </small>
            </Typography.Text>
          )}
        </div>
        <div>{props.extra}</div>
      </Flex>
    </div>
  );
};

export default PageHeader;
