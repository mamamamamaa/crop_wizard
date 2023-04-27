import { createContext, useContext } from "react";
import { useStore, createStore } from "zustand";

import { AuthSlice } from "@/types";
import { devtools, persist } from "zustand/middleware";

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

// export const initializeAuthStore = (
//   preloadedState: Partial<AuthSlice> = {}
// ) => {
//   return createStore<AuthSlice>()(
//     devtools(
//       persist(
//         (set, get, api) => ({
//           ...initialAuthData(),
//           ...preloadedState,
//           current: async () => {},
//           login: async () => {
//             set({ isLoading: !get().isLoading });
//           },
//           register: async () => {},
//           logout: async () => {},
//           setAccessToken: (token) => {
//             set({ accessToken: token });
//           },
//         }),
//         {
//           name: "auth-store",
//         }
//       )
//     )
//   );
// };

export const initializeAuthStore = (
  preloadedState: Partial<AuthSlice> = {}
) => {
  return createStore<AuthSlice>()(
    devtools((set, get, api) => ({
      ...initialAuthData(),
      ...preloadedState,
      current: async () => {},
      login: async () => {
        set({ isLoading: !get().isLoading });
      },
      register: async () => {},
      logout: async () => {},
      setAccessToken: (token) => {
        set({ accessToken: token });
      },
    }))
  );
};
