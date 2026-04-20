import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [meSelected, setMeSelected] = useState(false);

  return (
    <MyContext.Provider value={{ meSelected, setMeSelected }}>
      {children}
    </MyContext.Provider>
  );
}