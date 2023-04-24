export interface AuthData {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  username: string | null;
  email: string | null;
  accessToken: string | null;
}

export type SignIn = {
  email: string;
  password: string;
};

export type SignUp = {
  username: string;
  email: string;
  password: string;
};

export interface AuthSlice extends AuthData {
  login: (loginData: SignIn) => void;
  register: (loginData: SignUp) => void;
  logout: () => void;
  current: () => void;
}
