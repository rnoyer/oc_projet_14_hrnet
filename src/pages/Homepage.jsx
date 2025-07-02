import Header from "../components/Header";
import EmployeeForm from "../components/EmployeeForm";
import Modal from "modal-rnoyer";
import { useState } from "react";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  return (
    <>
      <Modal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        content={"Employee Created!"}
      />
      <Header title="Create Employee"></Header>
      <EmployeeForm onSuccess={handleOpenModal} />
    </>
  );
}
