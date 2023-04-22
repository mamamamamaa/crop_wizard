import { createContext, useContext } from "react";
import { useStore as useZustandStore, createStore } from "zustand";

import { StoreInterface, StoreType } from "@/types/store";
import { createAuthSlice, createImageSlice } from "@/lib/slices";

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
