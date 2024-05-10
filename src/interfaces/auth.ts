export interface LoginInput {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterInput {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  password: string;
}

export interface LoginSuccess {
  access_token: string;
}
