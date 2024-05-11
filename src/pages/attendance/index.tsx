import PageHeader from "@/components/page-header";
import MainLayout from "@/layouts/main-layout";
import AttendanceFilter from "./components/attendance-filter";
import AttendanceTable from "./components/attandance-table";

const Attendance: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        title="Attendance"
        subTitle="Manage your attendance"
        extra={<AttendanceFilter />}
      />
      <br />
      <AttendanceTable />
    </MainLayout>
  );
};

export default Attendance;
