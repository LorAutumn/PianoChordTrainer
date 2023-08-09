import { Button, Modal } from "flowbite-react";
import { useAtom } from "jotai";
import { showModalAtom } from "../store/state";

const SelectChordsModal = () => {
  const [showModal, setShowModal] = useAtom(showModalAtom);

  return (
    <Modal show={showModal} size="md">
      <Modal.Body>
        <div className="text-center">
          <h1 className="text-xl mt-5">Please select a chord range.</h1>
        </div>
        <div className="text-center flex justify-center mt-6 mb-6">
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SelectChordsModal;
