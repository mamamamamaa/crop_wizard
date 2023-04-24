import { createContext, useContext } from "react";
import { useStore, createStore } from "zustand";

import { AuthSlice } from "@/types";

const zustandContext = createContext<StoreType | null>(null);

const initialAuthData = () => ({
  isLoggedIn: false,
  isLoading: false,
  error: null,
  username: null,
  email: null,
  accessToken: null,
});

export type StoreType = ReturnType<typeof initializeAuthStore>;

export const Provider = zustandContext.Provider;

export const useAuthStore = <T>(selector: (state: AuthSlice) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Store is missing the provider");

  return useStore(store, selector);
};

export const initializeAuthStore = (
  preloadedState: Partial<AuthSlice> = {}
) => {
  return createStore<AuthSlice>((setState, getState, store) => ({
    data: initialAuthData(),
    ...preloadedState,
    current: async () => {},
    login: async () => {},
    register: async () => {},
    logout: async () => {},
  }));
};
