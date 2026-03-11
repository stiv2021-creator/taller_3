import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";

export const Myaccount = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const formularioValido =
    email !== "" &&
    password !== "" &&
    validarEmail(email) &&
    validarPassword(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formularioValido) {
      alert("Inicio de sesión exitoso 🚀");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background: "linear-gradient(135deg,#0f172a,#1e293b)"
      }}
    >
      <Card
        sx={{
          width: 380,
          p: 2,
          borderRadius: 3,
          boxShadow: 6,
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.02)"
          }
        }}
      >
        <CardContent>

          {/* Logo */}
          <Box display="flex" justifyContent="center" mb={1}>
            <SportsMotorsportsIcon sx={{ fontSize: 40, color: "#dc2626" }} />
          </Box>

          <Typography variant="h5" textAlign="center" fontWeight="bold">
            ShoFly Moto
          </Typography>

          <Typography variant="body2" textAlign="center" mb={3} color="text.secondary">
            Inicia sesión para comprar tus accesorios de moto
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Correo electrónico"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email !== "" && !validarEmail(email)}
              helperText={
                email !== "" && !validarEmail(email)
                  ? "Ingresa un correo válido"
                  : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon color="action" />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Contraseña"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={password !== "" && !validarPassword(password)}
              helperText={
                password !== "" && !validarPassword(password)
                  ? "Mínimo 8 caracteres, una mayúscula y un carácter especial"
                  : ""
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "#dc2626",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#b91c1c",
                  transform: "scale(1.03)"
                }
              }}
              disabled={!formularioValido}
            >
              Acceder
            </Button>

          </Box>

        </CardContent>
      </Card>
    </Box>
  );
};