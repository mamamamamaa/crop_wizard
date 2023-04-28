import { createContext, useContext } from "react";
import { useStore, createStore } from "zustand";

import { AuthSlice } from "@/types";
import { devtools } from "zustand/middleware";
import { removeCookies, setCookies } from "@/utils/cookies";
import axios from "axios";

const zustandContext = createContext<AuthStoreType | null>(null);

const initialAuthData = () => ({
  isLoggedIn: false,
  isLoading: false,
  error: null,
  username: null,
  email: null,
  accessToken: null,
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

  if (!isEmpty) {
    preloadedState.isLoggedIn = true;
  }

  return createStore<AuthSlice>()(
    devtools((set, get, api) => ({
      ...initialAuthData(),
      ...preloadedState,
      current: async () => {},
      login: async (loginData) => {
        const { data } = await axios.post(
          "http://localhost:9999/api/auth/login",
          loginData
        );

        console.log(data);

        setCookies(data);
      },
      register: async () => {},
      logout: async () => {
        removeCookies("accessToken", "user");
        set(initialAuthData());
      },
    }))
  );
};
