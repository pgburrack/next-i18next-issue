import { createContext, useState } from 'react';

export const DummyContext = createContext({});

export function DummyProvider({ children }) {
  const [state, setState] = useState({
    a: null
  });

  return <DummyContext.Provider value={{state, setState}}>
    {children}
  </DummyContext.Provider>
}
