import { create, createStore, Mutate, StoreApi } from "zustand";
import { useStore as useZustandStore } from "zustand";
import { createContext, useContext } from "react";
import { AuthSlice, ImageSlice } from "@/types";
import { createAuthSlice } from "@/lib/slices/auth";
import { createImageSlice } from "@/lib/slices/image";

interface StoreInterface {
  auth: AuthSlice;
  image: ImageSlice;
}

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Store is missing the provider");

  return useZustandStore(store, selector);
};

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {}
) => {
  return createStore<StoreInterface>((set, get, store) => ({
    auth: createAuthSlice(set, get, store),
    image: createImageSlice(set, get, store),
    ...preloadedState,
  }));
};
