import react, { createContext } from "react";

const initialState = {};

export const expenseTrackerContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
  return (
    <expenseTrackerContext.Provider value={"app:expense Tracker"}>
      {children}
    </expenseTrackerContext.Provider>
  );
};
