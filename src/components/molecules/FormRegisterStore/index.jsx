import { yupResolver } from "@hookform/resolvers/yup";
import { createRef } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../helper/FormValidation";
import { postStore } from "../../../helper/stores";
import API from "../../../services/api";
import Input from "../../atoms/Input";

const FormRegisterStore = () => {
  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleForm = async (data) => {
    try {
      await API.post(postStore(), {
        ...data,
      });
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        ref={ref}
        type="text"
        placeholder="Nome da empresa"
        size="large"
        {...register("businessName")}
      />

      <Input
        ref={ref}
        type="text"
        placeholder="Nome da loja"
        size="large"
        {...register("registeredName")}
      />

      <Input
        ref={ref}
        type="text"
        placeholder="CNPJ"
        size="large"
        {...register("cnpj")}
      />

      <Input
        ref={ref}
        type="text"
        placeholder="descrição"
        size="large"
        {...register("description")}
      />
    </form>
  );
};
export default FormRegisterStore;
