import { AxiosError } from "axios";
import { devtools } from "zustand/middleware";
import { createStore, useStore } from "zustand";

import { createContext, useContext } from "react";

import fetch from "@/utils/fetch";
import { LOGGED_IN, TOKEN } from "@/public/consts";
import { AuthSlice, SignInReturns, SignUpReturns } from "@/types";
import { removeCookies, setCookies } from "@/utils/cookies";

const zustandContext = createContext<AuthStoreType | null>(null);

const initialAuthData = () => ({
  isLoggedIn: false,
  isLoading: false,
  error: null,
  username: null,
  email: null,
  accessToken: null,
  avatarUrl: null,
});

export type AuthStoreType = ReturnType<typeof initializeAuthStore>;

export const AuthProvider = zustandContext.Provider;

export const useAuthStore = <T>(selector: (state: AuthSlice) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Auth store is missing the provider");

  return useStore(store, selector);
};

export const initializeAuthStore = (
  preloadedState: Partial<AuthSlice> = {}
) => {
  const isEmpty = Object.keys(preloadedState).length === 0;

  preloadedState.isLoggedIn = !isEmpty;
  setCookies({ isLoggedIn: !isEmpty });

  return createStore<AuthSlice>()(
    devtools((set, get, api) => ({
      ...initialAuthData(),
      ...preloadedState,
      current: async () => {},
      login: async (loginData) => {
        try {
          set({ isLoading: true });

          const { data } = await fetch.post<SignInReturns>(
            "/api/auth/login",
            loginData
          );

          setCookies({ accessToken: data.accessToken, isLoggedIn: true });

          const { accessToken, user } = data;
          const { email, username, avatarUrl } = user;

          set({
            accessToken,
            email,
            username,
            avatarUrl,
            isLoading: false,
            isLoggedIn: true,
          });
        } catch (error) {
          if (error instanceof AxiosError) {
            set({ isLoading: false, error: error.response?.data.message });
          }
        }
      },
      clearError: () => {
        set({ error: null });
      },
      register: async (registerData) => {
        try {
          set({ isLoading: true });
          const { data } = await fetch.post<SignUpReturns>(
            "/api/auth/register",
            registerData
          );

          const { username, email } = data;

          set({
            email,
            username,
            isLoading: false,
          });
        } catch (error) {
          if (error instanceof AxiosError) {
            set({ isLoading: false, error: error.response?.data.message });
          }
        }
      },
      logout: async () => {
        try {
          await fetch.get("/api/auth/logout");

          removeCookies(TOKEN, LOGGED_IN);
          set(initialAuthData());
        } catch (error) {
          if (error instanceof AxiosError) {
            set({ isLoading: false, error: error.response?.data.message });
          }
        }
      },
      reverify: async () => {
        try {
          set({ isLoading: true });
          const email = get().email;

          await fetch.post("/api/auth/reverify", { email });

          set({ isLoading: false });
        } catch (error) {
          if (error instanceof AxiosError) {
            set({ isLoading: false, error: error.response?.data.message });
          }
        }
      },
    }))
  );
};
console.log(fetch.defaults.headers);
