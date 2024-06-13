import { MainPageData } from "@interfaces/mainPage";
import { createContext, useContext, useState } from "react";

const DisplayPageContext = createContext(null);
export function DisplayPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState("sssssssssss");

  return (
    <DisplayPageContext.Provider value={state}>
      {children}
    </DisplayPageContext.Provider>
  );
}

export function useDisplayPageContext() {
  return useContext(DisplayPageContext);
}
