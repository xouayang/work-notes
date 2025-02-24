  'use client'
import { Button } from "@heroui/react";
import { useFormStatus } from "react-dom";

type btnSize = "default" | "lg" | "sm";
// const roitai:string = 'tam'
type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton =({ className }: SubmitButtonProps) => {
  // code
  const { pending } = useFormStatus();
  return (
    <Button
      size="md"
      color="success"
      disabled={pending}
      type="submit"
      className={`${className} capitalize`}
    >
      {pending ? (<p>Waiting</p>):(<p>ບັນທຶກ</p>)}
    </Button>
  );
};