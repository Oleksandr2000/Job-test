export interface UserSliceProps {
  token: string | null
  user: UserDocument | null
  status: string
  statusPost: string | null
  errorMessage: any
}

export type ResponseRegistration = {
  user: {
    _doc: UserDocument
  }
  token: string
}

export type UserDocument = {
  _id: string
  email: string
  name: string
}
