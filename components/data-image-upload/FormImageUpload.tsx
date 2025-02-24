"use client";

import { uploadTask } from "@/utils/upload";
import { addToast, Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface FormDataState {
  image: File | null;
  taskWork: string;
  amountPeople: string;
  room: string;
  reason: string;
  kilomet: string;
  longItude: string;
  laItude: string;
  another: string;
}

export default function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [dataForm, setDataForm] = useState<FormDataState>({
    image: null,
    taskWork: "",
    amountPeople: "",
    room: "",
    reason: "",
    kilomet: "",
    longItude: "",
    laItude: "",
    another: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const formData = new FormData();
    if (dataForm.image) {
      formData.append("image", dataForm.image);
    }
    formData.append("taskWork", dataForm.taskWork);
    formData.append("amountPeople", dataForm.amountPeople);
    formData.append("room", dataForm.room);
    formData.append("reason", dataForm.reason);
    formData.append("kilomet", dataForm.kilomet);
    formData.append("longItude", dataForm.longItude);
    formData.append("laItude", dataForm.laItude);
    formData.append("another", dataForm.another);

    try {
      const result = await uploadTask(formData);
      if (result.success === true) {
        addToast({
          title: "ສະຖານະບັນທຶກຂໍ້ມູນ",
          description: result.message,
          radius: "sm",
          color: "success",
          variant: "flat",
          timeout: 3000,
          hideIcon: false,
          hideCloseButton: true,
          classNames: {
            closeButton:
              "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
          },
        });
      }
      setDataForm({
        image: null,
        taskWork: "",
        amountPeople: "",
        room: "",
        reason: "",
        kilomet: "",
        longItude: "",
        laItude: "",
        another: "",
      });
    } catch (error) {
      setMessage("Upload failed: " + (error as Error).message);
      addToast({
        title: "ສະຖານະບັນທຶກຂໍ້ມູນ",
        description:(error as Error).message,
        radius: "sm",
        color: "danger",
        variant: "flat",
        timeout: 3000,
        hideIcon: false,
        hideCloseButton: true,
        classNames: {
          closeButton:
            "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
        },
      }); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <Input
        label="ໜ້າວຽກ"
        variant="bordered"
        isRequired
        type="text"
        name="taskWork"
        value={dataForm.taskWork}
        onChange={(e) => setDataForm({ ...dataForm, taskWork: e.target.value })}
      />
      <Input
        label="ຈຳນວນຄົນ"
        variant="bordered"
        isRequired
        type="text"
        name="amountPeople"
        value={dataForm.amountPeople}
        onChange={(e) =>
          setDataForm({ ...dataForm, amountPeople: e.target.value })
        }
      />
      <Input
        label="ຫ້ອງປະຕິບັດວຽກ"
        variant="bordered"
        isRequired
        type="text"
        name="room"
        value={dataForm.room}
        onChange={(e) => setDataForm({ ...dataForm, room: e.target.value })}
      />
      <Input
        label="ເຫດຜົນທີ່ເກີດຂື້ນ"
        variant="bordered"
        isRequired
        type="text"
        name="reason"
        value={dataForm.reason}
        onChange={(e) => setDataForm({ ...dataForm, reason: e.target.value })}
      />
      <Input
        isRequired
        label="ກີໂລແມັດທີ່ເກີດຂື້ນ"
        variant="bordered"
        type="text"
        name="kilomet"
        value={dataForm.kilomet}
        onChange={(e) => setDataForm({ ...dataForm, kilomet: e.target.value })}
      />
      <Input
        isRequired
        variant="bordered"
        label="Longitude"
        type="text"
        name="longItude"
        value={dataForm.longItude}
        onChange={(e) =>
          setDataForm({ ...dataForm, longItude: e.target.value })
        }
      />
      <Input
        isRequired
        variant="bordered"
        label="Latitude"
        type="text"
        name="laItude"
        value={dataForm.laItude}
        onChange={(e) => setDataForm({ ...dataForm, laItude: e.target.value })}
      />
      <Input
        variant="bordered"
        label="ອື່ນໆ..."
        type="text"
        name="another"
        value={dataForm.another}
        onChange={(e) => setDataForm({ ...dataForm, another: e.target.value })}
      />
      <Input
        isRequired
        variant="bordered"
        label="ຮູບ"
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) =>
          setDataForm({ ...dataForm, image: e.target.files?.[0] || null })
        }
      />
      <Button
        color="success"
        type="submit"
        isDisabled={loading}
        className="text-white p-2"
      >
        {loading ? "ກຳລັງບັນທຶກຂໍ້ມູນ" : "ບັນທຶກຂໍ້ມູນ"}
      </Button>
      {message && <p>{message}</p>}
    </Form>
  );
}
