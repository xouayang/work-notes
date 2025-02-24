import { deleteDataId } from "@/utils/actions";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { FiTrash2, FiXCircle } from "react-icons/fi";
import { getDataList } from "@/utils/actions";
type Data = {
  id: string;
  image: string;
  taskWork: string;
  amountPeople: string;
  room: string;
  reason: string;
  kilomet: string;
  longItude: string;
  laItude: string;
  another: string;
  date: string | Date;
};
type deleteIdType = {
  deleteId: string;
  isOpen: boolean;
  onClose: () => void;
  setIsFetch: React.Dispatch<React.SetStateAction<Data[]>>;
};
const DeleteModal = ({
  deleteId,
  isOpen,
  onClose,
  setIsFetch,
}: deleteIdType) => {
  const sendIdDelete = async (deleteId: string) => {
    try {
      await deleteDataId(deleteId);
      const result = await getDataList();
      if (Array.isArray(result)) {
        setIsFetch(result);
      }
      onClose();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onChange={onClose} hideCloseButton size="xs">
        <ModalContent>
          <ModalHeader className="bg-primary text-white">
            <h3>ທ່ານແນ່ໃຈບໍຈະລຶບຂໍ້ມູນນີ້ ? </h3>
          </ModalHeader>
          <ModalBody>{deleteId}</ModalBody>
          <ModalFooter>
            <Button
              className="text-white"
              size="md"
              color="success"
              onPress={() => sendIdDelete(deleteId)}
            >
              <FiTrash2 /> ລຶບ
            </Button>
            <Button size="md" color="danger" onPress={() => onClose()}>
              <FiXCircle /> ຍົກເລິກ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default DeleteModal;
