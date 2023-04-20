import { StateCreator } from "zustand";
import { ImageSlice } from "@/types";

const initialImageData = () => ({
  currentImage: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
});

export const createImageSlice: StateCreator<ImageSlice> = (set, get) => ({
  data: initialImageData(),
  saveImage: async () => {},
});
