import { createContext, useReducer } from 'react';

const initialState = {
  orders: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
