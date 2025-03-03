import { UserRole, UserTypes } from "@/shared/store/authStore"
import { Branch } from "./branch"

export interface UserBase {
  id: string
  image_url: string
  username: string
  phone_number: string
  password: string
  email: string
  user_role: UserRole
  user_type: UserTypes.EXTERNAL
  created_at: Date
  updated_at: Date
}

export interface ExternalUser extends UserBase {
  real_name: string
  branch?: Branch
}