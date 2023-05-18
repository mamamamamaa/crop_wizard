import { FC } from "react";
import { Label, TextInput } from "flowbite-react";
import { InputData, SignIn, SignUp } from "@/types";
import { UseFormRegister } from "react-hook-form";

interface Props {
  data: InputData;
  register: UseFormRegister<SignIn> | UseFormRegister<SignUp>;
}

export const FormInput: FC<Props> = ({ data, register }) => {
  const { inputId, placeholder, value } = data;

  return (
    <>
      <Label htmlFor={inputId} value={value} />
      <TextInput
        type={inputId}
        id={inputId}
        placeholder={placeholder}
        required={true}
        // @ts-ignore
        {...register(inputId)}
      />
    </>
  );
};
