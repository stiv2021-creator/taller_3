import { useState, useEffect } from "react";

export const useHora = () => {

  const [hora, setHora] = useState("");

  useEffect(() => {

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  return hora;
};