export interface ImageData {
  currentImage: File | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ImageSlice extends ImageData {
  saveImage: () => void;
}
