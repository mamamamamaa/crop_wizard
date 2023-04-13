import {createStore, useStore as useZustandStore} from "zustand";
import {createContext, useContext} from "react";


interface StoreInterface {
    error: string | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    email: string;
    username: string;
    userImages: string[] | null;
}

const getDefaultInitialState = () => ({
    error: null,
    isLoggedIn: false,
    isLoading: false,
    email: "",
    username: "",
    userImages: null,
})

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null)

export const Provider = zustandContext.Provider;

export const useStore = <T> (selector: (state: StoreInterface) => T) => {
    const store = useContext(zustandContext);

    if (!store) throw new Error('Store is missing the provider')

    return useZustandStore(store, selector)
}

export const initializeStore = (
    preloadedState: Partial<StoreInterface> = {}
) => {
    return createStore<StoreInterface>((set, get) => ({
        ...getDefaultInitialState(),
        ...preloadedState,
    }))
}