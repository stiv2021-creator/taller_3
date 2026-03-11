import { useState } from "react";

export const useBusqueda = () => {

  const [busqueda, setBusqueda] = useState("");

  return { busqueda, setBusqueda };
};