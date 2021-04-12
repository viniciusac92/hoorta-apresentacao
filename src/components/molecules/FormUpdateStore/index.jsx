import { yupResolver } from "@hookform/resolvers/yup";
import { createRef } from "react";
import { useForm } from "react-hook-form";
import { patchStore } from "../../../helper/stores";
import { useStores } from "../../../providers/StoresContext";
import API from "../../../services/api";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const FormUpdateStore = () => {
  const ref = createRef();
  const { userStore } = useStores();
  const {
    register,
    handleSubmit,
    formState: { erros },
    reset,
  } = useForm({ resolver: yupResolver() });

  const handleForm = async (data) => {
    try {
      const response = await API.patch(patchStore(userStore.id), data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <Input
        ype="text"
        ref={ref}
        placeholder="Alterar Nome"
        size="large"
        // {...register("name")}
      />

      <Input
        ype="text"
        ref={ref}
        placeholder="Alterar Descrição"
        size="large"
        // {...register("name")}
      />
      <Button type="submit" color="primary">
        Atualizar
      </Button>
    </form>
  );
};
export default FormUpdateStore;
