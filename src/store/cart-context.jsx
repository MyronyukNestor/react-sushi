import React, { createContext } from "react";

 const CartContext = createContext({
  items: [],
  totalAmount: 0,
  additem: (item) => {},
  removeUtem: (id) => {},
});

export default CartContext;
