// React
import { createRef } from "react";
// API
import API from "../../../services/api";
// Helpers
import { patchUser } from "../../../helper/user";
import { updateUserSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// ContextAPI
import { useData } from "../../../providers/UserContext";
// Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const FormUpdateUser = () => {
  const ref = createRef();
  const { userData, setUserData } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(updateUserSchema),
  });

  const handleForm = async (data) => {
    const { name, phone } = data;
    const defaultData = {
      name: name || userData.name,
      phone: phone || userData.phone || "",
    };
    try {
      const response = await API.patch(patchUser(userData.id), defaultData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setUserData(response.data);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        type="text"
        ref={ref}
        placeholder="Alterar Nome"
        size="large"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <Input
        type="text"
        ref={ref}
        placeholder="Alterar Telefone"
        size="large"
        {...register("phone")}
      />
      <p>{errors.phone?.message}</p>
      <Button type="submit" color="primary">
        Atualizar Dados
      </Button>
    </form>
  );
};

export default FormUpdateUser;
