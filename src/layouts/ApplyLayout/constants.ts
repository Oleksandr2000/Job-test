import * as Yup from "yup"

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ApllyValidation = Yup.object({
  email: Yup.string().email().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
  name: Yup.string().min(2, "Мінумум 2 символи").required("Обов'язкове поле"),
  number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
})

export const ApllyInitialValues = {
  name: "",
  email: "",
  number: "",
  advertisement: "",
}
