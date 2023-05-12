import { createStore, useStore } from "zustand";
import { createContext, useContext } from "react";

import fetch from "@/utils/fetch";
import { LOGGED_IN, TOKEN } from "@/public/consts";
import { devtools } from "zustand/middleware";
import { AuthSlice, SignInReturns } from "@/types";
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
          if (error instanceof Error) {
            set({ isLoading: false, error: error.message });
          }
        }
      },
      clearError: () => {
        set({ error: null });
      },
      register: async () => {},
      logout: async () => {
        removeCookies(TOKEN, LOGGED_IN);
        set(initialAuthData());
        set({ error: 'error: "dasdasdsa",' });
      },
    }))
  );
};
