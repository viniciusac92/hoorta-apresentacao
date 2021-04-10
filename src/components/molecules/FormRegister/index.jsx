// React
import { createRef, useState } from "react";
// API
import API from "../../../services/api";
// Helpers
import { postRegister } from "../../../helper/user";
import { registerSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
// ContextAPI
import { useData } from "../../../providers/UserContext";
// Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const FormRegister = () => {
  const ref = createRef();
  const [error, setError] = useState(null);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleForm = async (data) => {
    try {
      await API.post(postRegister(), {
        ...data,
        address: [],
        cc: [],
        productor: false,
        shoppingCount: 0,
      });
      reset();
      // history.push("/login");
    } catch (e) {
      console.log(e);
      if (e.response.data === "Email already exists") {
        setError("Email já cadastrado");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        ref={ref}
        type="text"
        placeholder="Email"
        size="large"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <Input
        ref={ref}
        type="password"
        placeholder="Senha"
        size="large"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <Input
        ref={ref}
        type="text"
        placeholder="Nome"
        size="large"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <Input
        ref={ref}
        type="number"
        placeholder="Idade"
        size="large"
        {...register("age")}
      />
      <p>{errors.age?.message}</p>
      <p>{error && error}</p>
      <Button type="submit" color="primary" size="large">
        Cadastrar
      </Button>
    </form>
  );
};

export default FormRegister;
