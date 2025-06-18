import Header from "../components/Header";
import EmployeeForm from "../components/EmployeeForm";
import Modal from "../components/modalPlugin/Modal";
import { useState } from "react";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <Modal open={isModalOpen} onClose={handleCloseModal} />
      <Header title="Create Employee"></Header>
      <EmployeeForm onSuccess={handleOpenModal} />
    </>
  );
}
