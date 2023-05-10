import { PropsWithChildren, useRef } from "react"

import {
  AuthProvider,
  AuthStoreType,
  initializeAuthStore,
} from "@/lib/authStore"
import {
  ImageProvider,
  ImageStoreType,
  initializeImageStore,
} from "@/lib/imageStore"

export const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const authStoreRef = useRef<AuthStoreType>()
  const imageStoreRef = useRef<ImageStoreType>()
  if (!authStoreRef.current) {
    authStoreRef.current = initializeAuthStore(props)
  }

  if (!imageStoreRef.current) {
    imageStoreRef.current = initializeImageStore(props)
  }

  return (
    <ImageProvider value={imageStoreRef.current}>
      <AuthProvider value={authStoreRef.current}>{children}</AuthProvider>
    </ImageProvider>
  )
}
