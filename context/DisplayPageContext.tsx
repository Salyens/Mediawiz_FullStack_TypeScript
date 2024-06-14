"use client";

import { IRenderData } from "@interfaces/admin";
import { SaveAlertType } from "@myTypes/adminTypes";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

type DisplayPageContextType = {
  data: IRenderData | null;
  setData: Dispatch<SetStateAction<IRenderData | null>>;
  emptyFields: string[];
  setEmptyFields: Dispatch<SetStateAction<string[]>>;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  saveStatus: SaveAlertType;
  setSaveStatus: Dispatch<SetStateAction<SaveAlertType>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

const DisplayPageContext = createContext<DisplayPageContextType | undefined>(
  undefined
);

export function DisplayPageWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<IRenderData | null>(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [saveStatus, setSaveStatus] = useState<SaveAlertType>("");
  const [error, setError] = useState<string>("");

  const contextValue = useMemo<DisplayPageContextType>(
    () => ({
      data,
      setData,
      emptyFields,
      setEmptyFields,
      formData,
      setFormData,
      saveStatus,
      setSaveStatus,
      error,
      setError,
    }),
    [data, emptyFields, formData, saveStatus, error]
  );

  return (
    <DisplayPageContext.Provider value={contextValue}>
      {children}
    </DisplayPageContext.Provider>
  );
}

export function useDisplayPageContext() {
  const context = useContext(DisplayPageContext);
  if (context === undefined) {
    throw new Error(
      "useDisplayPageContext must be used within a DisplayPageWrapper"
    );
  }
  return context;
}
