import Header from "../components/Header";
import Table from "../components/viewPage/Table";
import { useSelector } from "react-redux";

export default function Viewpage() {
  const employeeList = useSelector((state) => state.employee.value);

  return (
    <>
      <Header title="Current Employees" currentLink={false}></Header>
      <Table hrdata={employeeList} />
    </>
  );
}
