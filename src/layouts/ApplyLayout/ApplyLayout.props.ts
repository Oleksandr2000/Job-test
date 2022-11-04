export interface ApplyLayoutProps {
  advertisement?: string
  initialValues: any
  validationSchema: any
  handlerSubmit: (obj: Contact) => any
}

export type Contact = {
  name: string
  email: string
  number: string
  advertisement: string
}
