import React from 'react';

export const LoadingContext = React.createContext(null);

const LoadingProvider = ({ children }) => {
  return <LoadingContext.Provider value={null}>{children}</LoadingContext.Provider>;
};
