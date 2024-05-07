import { createContext, useReducer, useContext } from "react";
import { categories, producers } from "../services/placeholder-data";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState = {
  producers_API: producers,
  categories_API: categories, 
  favorites: [], 
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload] 
      };
    
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite !== action.payload)
      };
      
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload] 
      };
    
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload)
      };
    default:
      throw new Error("Unhandled action type");
  }
};

const Context = createContext();
const Dispatch = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Context.Provider>
  );
};

export const useCustomContext = () => { 
  const context = useContext(Context);
  if (!context) {
    throw Error("useCustomContext must be used within ContextProvider");
  }
  return context;
};

export const useCustomDispatch = () => { 
  const dispatch = useContext(Dispatch);
  if (!dispatch) {
    throw Error("useCustomDispatch must be used within ContextProvider");
  }
  return dispatch;
};
