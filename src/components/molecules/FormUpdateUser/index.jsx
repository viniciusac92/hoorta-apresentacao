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
import Text from "../../atoms/Text";
import { StyledForm } from "./styles";

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
    const {
      name,
      phone,
      road,
      number,
      city,
      state,
      cep,
      cc_number,
      expiration,
      cvv,
      owner,
    } = data;
    const defaultData = {
      name: name || userData.name,
      phone: phone || userData.phone,
      address:
        {
          road,
          number,
          city,
          state,
          cep,
        } ||
        userData.address ||
        [],
      cc:
        {
          cc_number,
          expiration,
          cvv,
          owner,
        } ||
        userData.cc ||
        [],
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
  console.log(userData);
  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
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
      <div className="addressContainer">
        <Text weigth="medium" size="small">
          Endereço
        </Text>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Endereço"
          size="large"
          {...register("road")}
        />
        <p>{errors.address?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Número"
          size="large"
          {...register("number")}
        />
        <p>{errors.number?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Cidade"
          size="large"
          {...register("city")}
        />
        <p>{errors.city?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Estado"
          size="large"
          {...register("state")}
        />
        <p>{errors.state?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar CEP"
          size="large"
          {...register("cep")}
        />
        <p>{errors.cep?.message}</p>
      </div>
      <div className="ccContainer">
        <Text className="subtitle" weigth="medium" size="small">
          Dados do Cartão
        </Text>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Número"
          size="large"
          {...register("cc_number")}
        />
        <p>{errors.cc_number?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Validade"
          size="large"
          {...register("expiration")}
        />
        <p>{errors.expiration?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar CVV"
          size="large"
          {...register("cvv")}
        />
        <p>{errors.cvv?.message}</p>
        <Input
          type="text"
          ref={ref}
          placeholder="Alterar Titular"
          size="large"
          {...register("owner")}
        />
        <p>{errors.owner?.message}</p>
      </div>
      <Button type="submit" color="primary" size="medium">
        Atualizar
      </Button>
    </StyledForm>
  );
};

export default FormUpdateUser;
