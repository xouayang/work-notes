"use client";
import { useActionState, useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { Form, addToast } from "@heroui/react";
const initialState = {
  message: "",
};
const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);  
  useEffect(() => {
    if (state.message) {
      addToast({
        title: "ສະຖານະບັນທຶກຂໍ້ມູນ",
        description: state.message,
        radius: "sm",
        color: "success",
        variant: "flat",
        timeout: 1000,
        hideIcon: false,
        hideCloseButton:true,
        classNames: {
          closeButton: "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
        },
      });
    }
  }, [state]);

  return <Form action={formAction}>{children}</Form>;
};
export default FormContainer;
