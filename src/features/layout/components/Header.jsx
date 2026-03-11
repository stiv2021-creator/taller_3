import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// MUI
import { AppBar, Toolbar, Button, Typography, Box, InputBase, Paper, Badge } from "@mui/material";
import { SportsMotorsports, Search as SearchIcon } from "@mui/icons-material";

import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// CONTEXTOS
import { BuysContext } from "./../../auth/hooks/BuysContext.jsx";
import { FavoritesContext } from "../../auth/hooks/FavoritesContext.jsx";

export const Header = () => {

  const { favorites } = useContext(FavoritesContext);
  const { buys } = useContext(BuysContext);

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: '#0f172a',
        borderBottom: '2px solid #dc2626'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', py: 1 }}>
        
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SportsMotorsports sx={{ color: '#dc2626', fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            ShoFly Moto
          </Typography>
        </Box>

        {/* Navegación */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>

          <Button 
            startIcon={<HomeIcon />}
            color="inherit" 
            component={NavLink} 
            to="/" 
            sx={{ color: 'white' }}
          >
            Inicio
          </Button>

          <Button 
            startIcon={<ArticleIcon />}
            color="inherit" 
            component={NavLink} 
            to="/Article" 
            sx={{ color: 'white' }}
          >
            Artículos
          </Button>

          {/* MIS COMPRAS */}
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/Mybuys" 
            sx={{ color: 'white', gap: 1 }}
          >
            <Badge badgeContent={buys.length} color="error">
              <ShoppingCartIcon />
            </Badge>

            Mis compras
          </Button>

          <Button 
            startIcon={<LocalOfferIcon />}
            color="inherit" 
            component={NavLink} 
            to="/Offers" 
            sx={{ color: 'white' }}
          >
            Ofertas
          </Button>

          {/* FAVORITOS */}
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/Myfavorities" 
            sx={{ color: 'white', gap: 1 }}
          >
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteIcon />
            </Badge>

            Mis favoritos
          </Button>

          <Button 
            startIcon={<AccountCircleIcon />}
            color="inherit" 
            component={NavLink} 
            to="/Myaccount" 
            sx={{ color: 'white' }}
          >
            Mi cuenta
          </Button>

        </Box>

        {/* Caja de búsqueda */}
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: { xs: '100%', sm: 300 },
            bgcolor: '#1e293b',
            borderRadius: 3,
            border: '1px solid #334155',
            mt: { xs: 1, sm: 0 }
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'white' }}
            placeholder="Buscar productos..."
            inputProps={{ 'aria-label': 'buscar productos' }}
          />

          <Box sx={{ p: '10px', color: '#dc2626', display: 'flex', alignItems: 'center' }}>
            <SearchIcon />
          </Box>

        </Paper>

      </Toolbar>
    </AppBar>
  );
};