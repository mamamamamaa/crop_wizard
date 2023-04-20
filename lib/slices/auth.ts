import { StateCreator } from "zustand";
import { AuthSlice } from "@/types";

const initialAuthData = () => ({
  isLoggedIn: false,
  isLoading: false,
  error: null,
  username: null,
  email: null,
  accessToken: null,
});

export const createAuthSlice: StateCreator<AuthSlice> = (set, get, store) => ({
  data: initialAuthData(),
  current: async () => {},
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});
