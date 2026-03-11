import { useRef } from "react";

export const useInputRef = () => {

  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return { inputRef, enfocar };
};