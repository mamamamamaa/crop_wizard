import { PropsWithChildren, useRef } from "react";

import { initializeAuthStore, Provider, StoreType } from "@/lib/store";

export const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const authStoreRef = useRef<StoreType>();

  if (!authStoreRef.current) {
    authStoreRef.current = initializeAuthStore(props);
  }

  return <Provider value={authStoreRef.current}>{children}</Provider>;
};
