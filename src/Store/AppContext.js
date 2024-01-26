import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState({
    page: 1,
    goal: null,
    measure: {},
    behavior: null,
    physical: null,
  });

  const updateSelectedData = newData => {
    setSelectedData(prevData => ({
      ...prevData,
      ...newData,
    }));
  };

  const value = {
    selectedData,
    updateSelectedData,
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
