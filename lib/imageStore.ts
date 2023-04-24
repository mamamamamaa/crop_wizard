import { createContext, useContext } from "react";
import { useStore, createStore } from "zustand";

import { ImageSlice } from "@/types";

const zustandContext = createContext<ImageStoreType | null>(null);

const initialImageData = () => ({
  currentImage: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
});

export type ImageStoreType = ReturnType<typeof initializeImageStore>;

export const ImageProvider = zustandContext.Provider;

export const useImageStore = <T>(selector: (state: ImageSlice) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Image store is missing the provider");

  return useStore(store, selector);
};

export const initializeImageStore = (
  preloadedState: Partial<ImageSlice> = {}
) => {
  return createStore<ImageSlice>((setState, getState, store) => ({
    ...initialImageData(),
    ...preloadedState,
    saveImage: async () => {
      setState({ isLoading: !getState().isLoading });
    },
  }));
};
