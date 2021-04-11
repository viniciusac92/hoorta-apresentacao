//React
import { createRef } from "react";
//API
import API from "../../../services/api";
//Dependencias
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//Helpers
import { registerStoreSchema } from "../../../helper/FormValidation";
import { postStore } from "../../../helper/stores";
//Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const FormRegisterStore = () => {
  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerStoreSchema) });

  const handleForm = async (data) => {
    try {
      await API.post(postStore(), {
        ...data,
        rating: [],
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
      <p>{errors.businessName?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="Nome da loja"
        size="large"
        {...register("registeredName")}
      />
      <p>{errors.registeredName?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="CNPJ"
        size="large"
        {...register("cnpj")}
      />
      <p>{errors.cnpj?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="Descreva sua loja!"
        size="large"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>
      <Button type="submit" color="primary" size="large">
        Cadastrar
      </Button>
    </form>
  );
};
export default FormRegisterStore;
