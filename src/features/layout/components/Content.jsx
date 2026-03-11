import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const Content = () => {
  const categories = [
    { title: "Cascos", desc: "Protección y estilo para tu moto" },
    { title: "Guantes", desc: "Seguridad y comodidad al conducir" },
    { title: "Chaquetas", desc: "Protección contra clima y caídas" },
    { title: "Accesorios", desc: "GPS, maletas y más" },
  ];

  const benefits = [
    { icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#dc2626" }} />, text: "Envíos rápidos" },
    { icon: <SecurityIcon sx={{ fontSize: 40, color: "#dc2626" }} />, text: "Pagos seguros" },
    { icon: <SportsMotorsportsIcon sx={{ fontSize: 40, color: "#dc2626" }} />, text: "Productos de calidad" },
    { icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#dc2626" }} />, text: "Soporte 24/7" },
  ];

  return (
    <Box>

      {/* HERO */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
          textAlign: "center",
          py: 12,
          px: 3
        }}
      >
        <SportsMotorsportsIcon sx={{ fontSize: 70, color: "#dc2626" }} />
        <Typography variant="h3" fontWeight="bold" mt={2}>
          Bienvenido a ShoFly Moto
        </Typography>
        <Typography variant="h6" mt={2} sx={{ opacity: 0.8 }}>
          Los mejores accesorios para tu moto al mejor precio
        </Typography>
        <Button
          component={NavLink}
          to="/Article"
          variant="contained"
          sx={{
            mt: 4,
            bgcolor: "#dc2626",
            fontWeight: "bold",
            px: 4,
            "&:hover": { bgcolor: "#b91c1c" }
          }}
        >
          Ver productos
        </Button>
      </Box>

      {/* CATEGORÍAS */}
      <Box sx={{ py: 10, px: 4 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
          Categorías
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center"
          }}
        >
          {categories.map(cat => (
            <Card key={cat.title} sx={{ p: 3, minWidth: 200, flex: "1 1 200px", textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6">{cat.title}</Typography>
                <Typography variant="body2">{cat.desc}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* BENEFICIOS */}
      <Box sx={{ background: "#f1f5f9", py: 10, px: 4 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
          ¿Por qué comprar con nosotros?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center"
          }}
        >
          {benefits.map(benefit => (
            <Card key={benefit.text} sx={{ p: 3, minWidth: 200, flex: "1 1 200px", textAlign: "center" }}>
              <CardContent>
                {benefit.icon}
                <Typography variant="h6" mt={2}>{benefit.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* CTA FINAL */}
      <Box sx={{ textAlign: "center", py: 10, background: "#e0e0e0", color: "white" }}>
        <Typography variant="h4" fontWeight="bold">Equipa tu moto hoy mismo</Typography>
        <Typography sx={{ mt: 2, opacity: 0.8 }}>
          Descubre los mejores accesorios para tu seguridad y estilo
        </Typography>
        <Button
          component={NavLink}
          to="/Article"
          variant="contained"
          sx={{ mt: 4, bgcolor: "#dc2626", px: 5, "&:hover": { bgcolor: "#b91c1c" } }}
        >
          Comprar ahora
        </Button>
      </Box>

    </Box>
  );
};