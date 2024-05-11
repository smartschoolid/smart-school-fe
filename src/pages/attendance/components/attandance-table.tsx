import { attendancesData } from "@/dummy-data";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

const AttendanceTable: React.FC = () => {
  const columns: ColumnsType = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Kelas",
      dataIndex: "class_name",
      key: "class_name",
    },
    {
      title: "Mata Pelajaran",
      dataIndex: "lesson",
      key: "lesson",
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={attendancesData}
      rowSelection={{}}
      rowKey={(key) => key.id}
      pagination={{
        size: "small",
      }}
    />
  );
};
export default AttendanceTable;
