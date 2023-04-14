import React from 'react';
import { AppProvider } from './user-context-provider';

type WrapperTestingProviderProps = {
  children: React.ReactNode;
};

const WrapperTestingProvider: React.FC<WrapperTestingProviderProps> = ({
  children,
}) => {
  return <AppProvider>{children}</AppProvider>;
};

export default WrapperTestingProvider;
