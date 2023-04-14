import React, { createContext, useContext, useState } from 'react';

export type AppContextValue = {
  user: string | null;

  setUser: (user: string | null) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const localeUser = localStorage.getItem('user') ?? null;
  const [user, setUser] = useState<string | null>(localeUser);

  const value: AppContextValue = {
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
