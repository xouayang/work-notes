"use client";

import { uploadTask } from "@/utils/upload";
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
      // Call the postData function with the FormData object
      const result = await uploadTask(formData);
      setMessage("Upload successful! Task ID: " + result.task?.id);
    } catch (error) {
      setMessage("Upload failed: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) =>
          setDataForm({ ...dataForm, image: e.target.files?.[0] || null })
        }
      />
      <input
        type="text"
        name="taskWork"
        value={dataForm.taskWork}
        onChange={(e) => setDataForm({ ...dataForm, taskWork: e.target.value })}
      />
      <input
        type="text"
        name="amountPeople"
        value={dataForm.amountPeople}
        onChange={(e) =>
          setDataForm({ ...dataForm, amountPeople: e.target.value })
        }
      />
      <input
        type="text"
        name="room"
        value={dataForm.room}
        onChange={(e) => setDataForm({ ...dataForm, room: e.target.value })}
      />
      <input
        type="text"
        name="reason"
        value={dataForm.reason}
        onChange={(e) => setDataForm({ ...dataForm, reason: e.target.value })}
      />
      <input
        type="text"
        name="kilomet"
        value={dataForm.kilomet}
        onChange={(e) => setDataForm({ ...dataForm, kilomet: e.target.value })}
      />
      <input
        type="text"
        name="longItude"
        value={dataForm.longItude}
        onChange={(e) =>
          setDataForm({ ...dataForm, longItude: e.target.value })
        }
      />
      <input
        type="text"
        name="laItude"
        value={dataForm.laItude}
        onChange={(e) => setDataForm({ ...dataForm, laItude: e.target.value })}
      />
      <input
        type="text"
        name="another"
        value={dataForm.another}
        onChange={(e) => setDataForm({ ...dataForm, another: e.target.value })}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white p-2"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}