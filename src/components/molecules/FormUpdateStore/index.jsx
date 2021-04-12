import { yupResolver } from "@hookform/resolvers/yup";
import { createRef } from "react";
import { useForm } from "react-hook-form";
import { updateUserSchema } from "../../../helper/FormValidation";
import { patchStore } from "../../../helper/stores";
import { useStores } from "../../../providers/StoresContext";
import { useData } from "../../../providers/UserContext";
import API from "../../../services/api";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const FormUpdateStore = () => {
  const ref = createRef();
  const { userStore, setUserStore } = useStores();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(updateUserSchema) });

  const handleForm = async (data) => {
    const { businessName, description } = data;
    const defaultData = {
      businessName: businessName || userStore.businessName,
      description: description || userStore.description,
    };
    console.log(defaultData);
    try {
      const response = await API.patch(patchStore(1), defaultData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setUserStore(response.data);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        ype="text"
        ref={ref}
        placeholder="Alterar Nome"
        size="large"
        {...register("businessName")}
      />
      <p>{errors.businessName?.message}</p>

      <Input
        ype="text"
        ref={ref}
        placeholder="Alterar Descrição"
        size="large"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>

      <Button type="submit" color="primary">
        Atualizar
      </Button>
    </form>
  );
};
export default FormUpdateStore;
