// React
import { createRef, useEffect } from "react";
// API
import API from "../../../services/api";
// Helpers
import { patchProduct, getProducts } from "../../../helper/products";
import { registerProductSchema } from "../../../helper/FormValidation";
// Dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// ContextAPI
import { useProducts } from "../../../providers/ProductsContext";
import { useData } from "../../../providers/UserContext";
// Components
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import { StyledForm } from "./styles";
import Input from "../../atoms/Input";

const FormUpdateProduct = ({ currentProductId, currentStoreId }) => {
  const { userData } = useData();
  const { productsData, setProductsData } = useProducts();
  const ref = createRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerProductSchema),
  });

  const handleForm = async (data) => {
    const info = { ...data };
    try {
      await API.patch(
        patchProduct(currentProductId),
        { info, storeId: currentStoreId, userId: userData.id },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      const response = await API.get(
        getProducts(userData.id, userData.storeId),
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      setProductsData(response.data);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <Input
        type="text"
        ref={ref}
        placeholder="Tomate Cereja"
        size="large"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <Input
        type="text"
        ref={ref}
        placeholder="Preço"
        size="large"
        {...register("price")}
      />
      <p>{errors.price?.message}</p>
      <TextArea
        type="text"
        ref={ref}
        placeholder="Produto livre de conservantes e agrotóxicos"
        size="large"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>

      <Button type="submit" color="primary" size="medium">
        Salvar
      </Button>
    </StyledForm>
  );
};

export default FormUpdateProduct;
