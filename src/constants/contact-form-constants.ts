import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  message: yup.string().min(20, "Preencha no mínimo 20 caracteres."),
  name: yup
    .string()
    .min(3, "Preencha no mínimo 3 caracteres.")
    .required("O nome é obrigatório."),
  phoneNumber: yup
    .string()
    .required("O número de celular é obrigatório.")
    .test(
      "min-phone-number-length",
      "Preencha um número válido.",
      (value) => value.replace(/\s/g, "").length === 11
    ),
});

export const contactFormInitialValues = {
  message: "",
  name: "",
  phoneNumber: "",
};
