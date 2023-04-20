import { AuthSlice } from "@/types/auth";
import { ImageSlice } from "@/types/image";
import { initializeStore } from "@/lib/store";

export interface StoreInterface {
  auth: AuthSlice;
  image: ImageSlice;
}

export type StoreType = ReturnType<typeof initializeStore>;
