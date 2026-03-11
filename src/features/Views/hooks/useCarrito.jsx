import { useState } from "react";

export const useCarrito = () => {

  const [carrito, setCarrito] = useState(0);

  const agregarProducto = () => setCarrito(carrito + 1);

  const quitarProducto = () => {
    if (carrito > 0) {
      setCarrito(carrito - 1);
    }
  };

  return { carrito, agregarProducto, quitarProducto };
};