import Modal from "modal-rnoyer";
import { useState } from "react";

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  return (
    <div className="flex justify-center">
      <Modal open={isModalOpen} setOpen={setIsModalOpen} content="Opened !" />
      <button onClick={handleOpenModal} className="btn btn-lg btn-primary m-20">
        Open Modal !
      </button>
    </div>
  );
}
