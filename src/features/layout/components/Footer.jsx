import React from "react";
import { NavLink } from "react-router-dom";

// MUI
import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import { 
  SportsMotorsports, 
  Facebook, 
  Instagram, 
  Twitter, 
  WhatsApp,
  Email,
  Phone,
  LocationOn
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0f172a',
        color: 'white',
        borderTop: '2px solid #dc2626',
        mt: 5,
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between'
          }}
        >
          {/* Logo y descripción */}
          <Box sx={{ flex: '1 1 300px', minWidth: 250 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SportsMotorsports sx={{ color: '#dc2626', fontSize: 36 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                ShoFly Moto
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '##e0e0e0', mb: 2 }}>
              Tu tienda especializada en accesorios y equipamiento para motociclistas. 
              Calidad y seguridad para tu pasión por las motos.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                sx={{ color: '#dc2626', bgcolor: '#1e293b', '&:hover': { bgcolor: '#2d3a4f' } }} 
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>

              <IconButton 
                sx={{ color: '#dc2626', bgcolor: '#1e293b', '&:hover': { bgcolor: '#2d3a4f' } }} 
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>

              <IconButton 
                sx={{ color: '#dc2626', bgcolor: '#1e293b', '&:hover': { bgcolor: '#2d3a4f' } }} 
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>

              <IconButton 
                sx={{ color: '#dc2626', bgcolor: '#1e293b', '&:hover': { bgcolor: '#2d3a4f' } }} 
                aria-label="WhatsApp"
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Box>

          {/* Enlaces rápidos */}
          <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#dc2626' }}>
              Enlaces
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <NavLink to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Inicio</NavLink>
              <NavLink to="/Article" style={{ color: '#94a3b8', textDecoration: 'none' }}>Artículos</NavLink>
              <NavLink to="/Offers" style={{ color: '#94a3b8', textDecoration: 'none' }}>Ofertas</NavLink>
              <NavLink to="/Myaccount" style={{ color: '#94a3b8', textDecoration: 'none' }}>Mi cuenta</NavLink>
            </Box>
          </Box>

          {/* Categorías */}
          <Box sx={{ flex: '1 1 150px', minWidth: 150 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#dc2626' }}>
              Categorías
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>Cascos</Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>Chaquetas</Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>Guantes</Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>Maletas</Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>Accesorios</Typography>
            </Box>
          </Box>

          {/* Contacto */}
          <Box sx={{ flex: '1 1 250px', minWidth: 250 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#dc2626' }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ color: '#dc2626' }} />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Av. REGIONAL #123, Medellin, Colombia
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#dc2626' }} />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  +57 320452889
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#dc2626' }} />
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  contacto@shoflymoto.cl
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: '#1e293b', my: 3 }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            © 2025 ShoFly Moto - Todos los derechos reservados
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>Términos y condiciones</Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>Política de privacidad</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};