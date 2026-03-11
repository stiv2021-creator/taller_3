import { useCallback } from "react";

export const useAgregarCallback = (setCarrito, carrito) => {

  const agregarProducto = useCallback(() => {
    setCarrito(carrito + 1);
  }, [carrito, setCarrito]);

  return agregarProducto;
};