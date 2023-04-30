/*
This provider file gives exposure to any and all providers that should be globally accessible to any components
if any contexts are created that should be globally accessible in the future those should be added here
*/
import React from 'react';
import { SessionProvider } from './SessionContext';

export interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <>
      {children}
    </>
  );
};