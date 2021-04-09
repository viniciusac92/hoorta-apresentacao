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

// Styles

// Components

/* ------------------------------ */

const FormLogin = () => {
  //   const history = useHistory();
  const { setUserData } = useData();
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
      // Faz login e salva token
      const response = await API.post(postLogin(), data);
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      const { sub } = jwt_decode(response.data.accessToken);

      //@TODO Armazenar o token no context
      // Busca dados do usuário e salva os dados no context
      const userInfo = await API.get(getUser(sub), {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setUserData({ ...userInfo.data });

      reset();
      //   history.push();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <input type="text" {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>
      <input type="password" placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormLogin;
