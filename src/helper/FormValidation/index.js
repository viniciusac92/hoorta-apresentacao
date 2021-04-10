import * as yup from "yup";

// REGEX
const PHONE_REGEX = /^\([1-9]{2}\) [9]{1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/;

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

export const updateUserSchema = yup.object().shape({
  name: yup.string().max(20, "Máximo 10 caracteres"),
  phone: yup.string().matches(PHONE_REGEX, {
    message: "Número inválido, formato requerido: (11) 9111-1111",
    excludeEmptyString: true,
  }),
});
