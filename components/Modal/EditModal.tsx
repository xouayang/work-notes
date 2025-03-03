import { updateDataId } from "@/utils/actions";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { FiEdit2, FiXCircle } from "react-icons/fi";

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
  createdAt: string | Date;
};

type EditeType = {
  updateId: Partial<Data>;
  isOpen: boolean;
  onClose: () => void;
  setIsFetch: React.Dispatch<React.SetStateAction<Data[]>>;
};

const EditModal = ({ updateId, isOpen, onClose, setIsFetch }: EditeType) => {
  const [formData, setFormData] = useState<Partial<Data>>({
    taskWork: "",
    amountPeople: "",
    room: "",
    reason: "",
    kilomet: "",
    longItude: "",
    laItude: "",
    another: "",
  });

  // Ensure `formData` is updated when the modal opens
  useEffect(() => {
    if (isOpen) {
      // Only update formData when the modal is opened and updateId has changed
      setFormData((prev) => ({
        ...prev,
        ...updateId, // Merge updateId into the state
      }));
    }
  }, [isOpen, updateId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const sendUpdate = async () => {
    try {
      await updateDataId(formData);
      setIsFetch((prev) =>
        prev.map((item) =>
          item.id === formData.id ? { ...item, ...formData } : item
        )
      );
      onClose();
    } catch (error) {
      console.error("Error during the update:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton size="xs">
      <ModalContent>
        <ModalHeader className="bg-primary text-white">ແກ້ໄຂຂໍ້ມູນ</ModalHeader>
        <ModalBody className="flex flex-col gap-2">
          <Input
            name="taskWork"
            label="ໜ້າວຽກ"
            variant="bordered"
            value={formData.taskWork || ""}
            onChange={handleChange}
          />
          <Input
            name="amountPeople"
            label="ຈຳນວນຄົນ"
            variant="bordered"
            value={formData.amountPeople || ""}
            onChange={handleChange}
          />
          <Input
            name="room"
            label="ຫ້ອງປະຕິບັດວຽກ"
            variant="bordered"
            value={formData.room || ""}
            onChange={handleChange}
          />
          <Input
            name="reason"
            label="ສາເຫດທີ່ເກີດຂື້ນ"
            variant="bordered"
            value={formData.reason || ""}
            onChange={handleChange}
          />
          <Input
            name="kilomet"
            label="ກີໂລເມັດທີ່ເກີດຂື້ນ"
            variant="bordered"
            value={formData.kilomet || ""}
            onChange={handleChange}
          />
          <Input
            name="longItude"
            label="longItude"
            variant="bordered"
            value={formData.longItude || ""}
            onChange={handleChange}
          />
          <Input
            name="laItude"
            label="laItude"
            variant="bordered"
            value={formData.laItude || ""}
            onChange={handleChange}
          />
          <Input
            name="another"
            label="ອື່ນໆ..."
            variant="bordered"
            value={formData.another || ""}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter className="flex gap-2">
          <Button
            size="md"
            color="success"
            className="text-white"
            onPress={sendUpdate}
          >
            <FiEdit2 /> ແກ້ໄຂ
          </Button>
          <Button color="danger" size="md" onPress={onClose}>
            <FiXCircle /> ຍົກເລິກ
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
