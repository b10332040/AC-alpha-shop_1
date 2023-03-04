import { createContext } from "react";
import { shoppingListData } from "../data/checkoutData";

export const StepContext = createContext(1);
export const ShoppingDataContext = createContext({});
export const CanSubmitContext = createContext(false);
export const CartContext = createContext(shoppingListData);