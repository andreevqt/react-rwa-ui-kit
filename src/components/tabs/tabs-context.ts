import { createContext } from 'react';

export interface ITabsContext {
  value: string,
  onChange: (value: string) => void,
}

export default createContext<ITabsContext>({ value: '', onChange: () => null });
