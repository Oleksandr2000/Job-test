export interface AuthFormLayoutProps {
  title: string
  numberField?: boolean
  nameField?: boolean
  initialValues: AuthFormInitialValues
  validationSchema: any
  handlerSubmit: (obj: User) => any
}

export type User = {
  name?: string
  email: string
  number?: string
  password: string
}

export type AuthFormInitialValues = {
  name?: string
  email: string
  number?: string
  password: string
}
