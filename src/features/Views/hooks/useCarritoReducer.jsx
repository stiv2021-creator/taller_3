import { useReducer } from "react";

const reducer = (state, action) => {

  switch (action.type) {

    case "agregar":
      return state + 1;

    case "quitar":
      return state > 0 ? state - 1 : 0;

    default:
      return state;
  }
};

export const useCarritoReducer = () => {

  const [carrito, dispatch] = useReducer(reducer, 0);

  return { carrito, dispatch };
};