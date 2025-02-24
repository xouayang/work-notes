import { Input } from "@heroui/react";

type typeInPut = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  variant:string;
};
const FormInput = (props: typeInPut) => {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
      <Input
        fullWidth
        isRequired
        name={name}
        type={type}
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        variant="bordered"
      />
  );
};
export default FormInput;
