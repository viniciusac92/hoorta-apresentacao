import * as yup from "yup";

// Error Messages
const required = "Campo obrigatório";

// Schemas
export const loginSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required(required),
  password: yup
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .required(required),
});
