import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface FormDataType {
  category: string;
  name: string;
  description: string;
  information: string;
  color: number;
  frame: string;
  img: string | File | null;
}

interface FormContextValue {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

interface FormProviderProps {
  children: ReactNode;
}

const FormContext = createContext<FormContextValue | null>(null);

export function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<FormDataType>({
    category: '',
    name: '',
    description: '',
    information: '',
    color: 1,
    frame: 'SNOW',
    img: null,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
