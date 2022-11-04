import * as Yup from "yup";


export const RegistryValidation = Yup.object({
    email: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
    name: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
    number: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
    password: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
  });

export  const AuthValidation = Yup.object({
    email: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
    password: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
  });

export  const RegistryInitialValues = {
    name: "",
    email: "",
    number: "",
    password: "",
  };

export  const AuthInitialValues = {
    email: "",
    password: "",
  };