export interface Signin {
  session_field: string
  password: string
}

export interface Register {
  email: string
  password: string
  username: string
  phone_number: string
}
