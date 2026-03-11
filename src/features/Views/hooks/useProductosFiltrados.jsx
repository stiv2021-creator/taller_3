import { useMemo } from "react";

export const useProductosFiltrados = (productos, busqueda) => {

  const productosFiltrados = useMemo(() => {

    return productos.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

  }, [productos, busqueda]);

  return productosFiltrados;
};