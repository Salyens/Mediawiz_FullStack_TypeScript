"use client";

import { createContext, useContext, useRef, MutableRefObject } from "react";

interface AppContextProps {
  scrollToRef: MutableRefObject<HTMLElement | null>;
}

const AppContext = createContext<AppContextProps | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const scrollToRef = useRef<HTMLElement | null>(null);

  return (
    <AppContext.Provider value={{ scrollToRef }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
