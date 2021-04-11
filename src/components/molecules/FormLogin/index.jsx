// React
import { createRef, useState } from "react";
// API
import API from "../../../services/api";
// Helpers
import { postLogin, getUser } from "../../../helper/user";
import { loginSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
// ContextAPI
import { useData } from "../../../providers/UserContext";
import { useStores } from "../../../providers/StoresContext";
// Components
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const FormLogin = () => {
  const ref = createRef();
  const [error, setError] = useState(null);
  const history = useHistory();
  const { setUserData } = useData();
  const { getAllStores } = useStores();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleForm = async (data) => {
    try {
      const response = await API.post(postLogin(), data);
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      const { sub } = jwt_decode(response.data.accessToken); // Id
      const userInfo = await API.get(getUser(sub), {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setUserData({ ...userInfo.data });
      reset();
      getAllStores();
      history.push("/dashboard");
    } catch (e) {
      console.log(e);
      if (e.response.data === "Cannot find user") {
        setError("Usuário não encontrado");
      } else if (e.response.data === "Incorrect password") {
        setError("Senha incorreta");
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
      <p>{error && error}</p>
      <Button type="submit" color="primary" size="large">
        Entrar
      </Button>
    </form>
  );
};

export default FormLogin;
