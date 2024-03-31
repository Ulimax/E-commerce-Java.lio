import { createContext } from "react";

const BackpackContext = createContext();

export const BackpackProvider = ({children}) => {
    return (
        <>
            <BackpackContext.Provider>
                {children}
            </BackpackContext.Provider>
        </>
    )
}