import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [id,setId] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        id,
        setId
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;