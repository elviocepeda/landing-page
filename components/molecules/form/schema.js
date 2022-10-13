import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obligatorio")
    .min(3, "Debe tener al menos 3 caracteres.")
    .max(15, "Debe tener menos de 15 caracteres."),
  phone: yup
    .string()
    .required("Campo obligatorio")
    .matches(/^\+?[0-9]{3}-?[0-9]{6,12}$/, "Ingresa un teléfono válido."),
  email: yup
    .string()
    .required("Campo obligatorio.")
    .email("Ingresa un email válido."),
  companyName: yup.string(),
  contactWay: yup.string(),
  reason: yup.string(),
  message: yup.string(),
});

export default schema;
