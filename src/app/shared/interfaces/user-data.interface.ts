export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password?: string;
  id?: string;
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
