"use client"

import { SaveAlertType } from "@myTypes/adminTypes";
import { Endpoints } from "@myTypes/mainTypes";
import { DataForEndpoint } from "@utils/endpointHelper";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useMemo } from "react";

type DisplayPageContextType<E extends Endpoints> = {
  data: DataForEndpoint<E> | null;
  setData: Dispatch<SetStateAction<DataForEndpoint<E> | null>>;
  emptyFields: string[];
  setEmptyFields: Dispatch<SetStateAction<string[]>>;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  saveStatus: SaveAlertType;
  setSaveStatus: Dispatch<SetStateAction<SaveAlertType>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
};

const DisplayPageContext = createContext<DisplayPageContextType<Endpoints> | undefined>(undefined);

export function DisplayPageWrapper<E extends Endpoints>({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataForEndpoint<E> | null>(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [saveStatus, setSaveStatus] = useState<SaveAlertType>("");
  const [error, setError] = useState<string>("");

  const contextValue = useMemo<DisplayPageContextType<E>>(
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

export function useDisplayPageContext<E extends Endpoints>() {
  const context = useContext(DisplayPageContext) as DisplayPageContextType<E>;
  if (context === undefined) {
    throw new Error("useDisplayPageContext must be used within a DisplayPageWrapper");
  }
  return context;
}
