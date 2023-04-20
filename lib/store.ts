import { createContext, useContext } from "react";
import { useStore as useZustandStore, createStore } from "zustand";

import { createAuthSlice } from "@/lib/slices/auth";
import { createImageSlice } from "@/lib/slices/image";
import { StoreInterface, StoreType } from "@/types/store";

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
  return createStore<StoreInterface>((...data) => ({
    // @ts-ignore
    auth: createAuthSlice(...data),
    // @ts-ignore
    image: createImageSlice(...data),
    ...preloadedState,
  }));
};
