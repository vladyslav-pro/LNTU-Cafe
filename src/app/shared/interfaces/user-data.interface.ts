export interface UserData {
  email: string;
  id?: string;
  image?: string;
  last_name: string;
  name: string;
  phone_number: string;
  role?: string;
}

export interface AuthUserData {
  email: string;
  password: string;
  token: string;
  status?: string;
  _tokenExpirationDate?: Date;
}

export interface RegistrationUser {
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RequestedUser {
  id: number;
  full_name: string;
  email: string;
  avatar: string | null;
}
