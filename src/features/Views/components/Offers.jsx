import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  createContext
} from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  TextField
} from "@mui/material";

/* CONTEXT */
const UsuarioContext = createContext();

/* REDUCER */
const reducer = (state, action) => {
  switch (action.type) {
    case "sumar":
      return state + 1;
    case "restar":
      return state - 1;
    default:
      return state;
  }
};

/* CUSTOM HOOK */
const useContadorPersonal = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => setNumero(numero + 1);
  const disminuir = () => setNumero(numero - 1);
  const reset = () => setNumero(0);

  return { numero, aumentar, disminuir, reset };
};

export const Offers = () => {

  /* useState */
  const [nombre, setNombre] = useState("");

  /* useMemo */
  const [textoMemo, setTextoMemo] = useState("");

  /* useContext editable */
  const [usuarioContexto, setUsuarioContexto] = useState("Daniel");

  /* useEffect texto */
  const [textoEffect, setTextoEffect] = useState("");
  const [mensaje, setMensaje] = useState("");

  /* reloj */
  const [hora, setHora] = useState("");

  /* useReducer */
  const [contador, dispatch] = useReducer(reducer, 0);

  /* useRef */
  const inputRef = useRef(null);

  /* useContext */
  const usuario = useContext(UsuarioContext);

  /* useEffect TEXTO */
  useEffect(() => {
    if (textoEffect === "") {
      setMensaje("Escribe algo abajo");
    } else {
      setMensaje("Escribiste: " + textoEffect);
    }
  }, [textoEffect]);

  /* useEffect RELOJ */
  useEffect(() => {

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  /* useCallback */
  const sumarCallback = useCallback(() => {
    dispatch({ type: "sumar" });
  }, []);

  /* useMemo */
  const textoMayus = useMemo(() => {
    return textoMemo.toUpperCase();
  }, [textoMemo]);

  /* custom hook */
  const { numero, aumentar, disminuir, reset } = useContadorPersonal();

  /* useRef función */
  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (

    <UsuarioContext.Provider value={{ usuario: usuarioContexto }}>

      <Container sx={{ mt: 4 }}>

        <Typography variant="h4" align="center" gutterBottom>
          Ejemplo de Hooks de React
        </Typography>

        {/* useState */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useState</Typography>

            <TextField
              label="Escribe tu nombre"
              fullWidth
              value={nombre}
              inputRef={inputRef}
              onChange={(e) => setNombre(e.target.value)}
            />

            <Typography sx={{ mt: 2 }}>
              Nombre guardado: {nombre}
            </Typography>

          </CardContent>
        </Card>

        {/* useRef */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useRef</Typography>

            <Button variant="contained" onClick={enfocarInput}>
              Enfocar el input de arriba
            </Button>

          </CardContent>
        </Card>

        {/* useMemo */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useMemo</Typography>

            <TextField
              label="Escribe texto"
              fullWidth
              onChange={(e) => setTextoMemo(e.target.value)}
            />

            <Typography sx={{ mt: 2 }}>
              Texto en mayúsculas: {textoMayus}
            </Typography>

          </CardContent>
        </Card>

        {/* useReducer */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useReducer</Typography>

            <Typography>
              Contador: {contador}
            </Typography>

            <Button
              variant="contained"
              sx={{ mr: 2, mt: 1 }}
              onClick={() => dispatch({ type: "sumar" })}
            >
              +
            </Button>

            <Button
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={() => dispatch({ type: "restar" })}
            >
              -
            </Button>

          </CardContent>
        </Card>

        {/* useCallback */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useCallback</Typography>

            <Button
              variant="contained"
              onClick={sumarCallback}
            >
              Sumar usando callback
            </Button>

          </CardContent>
        </Card>

        {/* useContext */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useContext</Typography>

            <TextField
              label="Cambiar usuario del contexto"
              fullWidth
              onChange={(e) => setUsuarioContexto(e.target.value)}
            />

            <Typography sx={{ mt: 2 }}>
              Usuario del contexto: {usuario?.usuario}
            </Typography>

          </CardContent>
        </Card>

        {/* useEffect texto */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">useEffect (texto)</Typography>

            <TextField
              label="Escribe algo"
              fullWidth
              onChange={(e) => setTextoEffect(e.target.value)}
            />

            <Typography sx={{ mt: 2 }}>
              {mensaje}
            </Typography>

          </CardContent>
        </Card>

        {/* useEffect reloj */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">
              useEffect (reloj)
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Hora actual: {hora}
            </Typography>

          </CardContent>
        </Card>

        {/* Custom Hook */}
        <Card sx={{ mb: 3 }}>
          <CardContent>

            <Typography variant="h6">Custom Hook</Typography>

            <Typography>
              Número: {numero}
            </Typography>

            <Button sx={{ mr: 2 }} onClick={aumentar}>
              +
            </Button>

            <Button sx={{ mr: 2 }} onClick={disminuir}>
              -
            </Button>

            <Button onClick={reset}>
              Reset
            </Button>

          </CardContent>
        </Card>

      </Container>

    </UsuarioContext.Provider>
  );
};