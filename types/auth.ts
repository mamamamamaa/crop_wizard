import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type AuthData = {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  username: string | null;
  email: string | null;
  accessToken: string | null;
  avatarUrl: string | null;
};

export type SignIn = {
  email: string;
  password: string;
};

export type SignUpReturns = {
  message: string;
  email: string;
  username: string;
};

export type SignInReturns = {
  accessToken: string;
  user: {
    username: string;
    email: string;
    avatarUrl: string;
  };
};

export type SignUp = {
  username: string;
  email: string;
  password: string;
};

export interface AuthSlice extends AuthData {
  clearError: () => void;
  login: (loginData: SignIn) => void;
  register: (loginData: SignUp) => void;
  logout: () => void;
  current: () => void;
}

export type InputData = {
  inputId: string;
  value: string;
  placeholder: string;
};

type Subtext = { part1: string; part2: string };

export type AuthCardProps = {
  register: UseFormRegister<SignIn>;
  handleSubmit: UseFormHandleSubmit<SignIn>;
  header: string;
  pathToReturn: string;
  inputData: InputData[];
  subtext: Subtext;
  onSubmit: Function;
};
