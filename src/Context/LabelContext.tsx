import React, { createContext } from 'react';

type LabelContextType = {
  texto: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
}

 
const initialState = {
  texto: 'Estado',
  type: '',
  name: '',
  id: '',
  placeholder: 'placeholder'
}

export const LabelContext = createContext<LabelContextType>(initialState);

// provendo
export const LabelContextProvider = ({ children }: React.PropsWithChildren) => {
  return (
      <LabelContext.Provider value={initialState}>
          {children}
      </LabelContext.Provider>
  )
}