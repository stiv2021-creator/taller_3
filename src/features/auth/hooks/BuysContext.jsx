import React, { createContext, useState } from "react";

export const BuysContext = createContext();

export const BuysProvider = ({ children }) => {

  const [buys, setBuys] = useState([]);

  const addBuy = (product) => {

    const exist = buys.find((item) => item.id === product.id);

    if (!exist) {
      setBuys([...buys, product]);
    }

  };

  return (
    <BuysContext.Provider value={{ buys, addBuy }}>
      {children}
    </BuysContext.Provider>
  );
};