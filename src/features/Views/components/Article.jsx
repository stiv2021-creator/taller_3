import React, { useContext } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

import { FavoritesContext } from './../../auth/hooks/FavoritesContext.jsx';
import { BuysContext } from './../../auth/hooks/BuysContext.jsx';

export const Article = () => {
  const { addFavorite } = useContext(FavoritesContext);
  const { addBuy } = useContext(BuysContext);

  const products = [
    { id: 1, name: 'Casco Moto', price: '$250.000', image: '/img/agv.jpg' },
    { id: 2, name: 'Guantes Moto', price: '$80.000', image: '/img/guantes.jpg' },
    { id: 3, name: 'Chaqueta Moto', price: '$320.000', image: '/img/chaqueta.jpg' },
    { id: 4, name: 'GPS Moto', price: '$210.000', image: '/img/gps.jpg' },
    { id: 5, name: 'Maleta Moto', price: '$145.000', image: '/img/maleta.jpg' }
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography 
        variant="h4" 
        sx={{ mb: 4, fontWeight: 'bold', borderLeft: '5px solid #dc2626', pl: 2 }}
      >
        Artículos de Motos
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{ width: 300, display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 3 }}
          >
            <CardMedia
              component="img"
              height="180"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'cover' }}
            />

            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>{product.name}</Typography>
              <Typography variant="h4" sx={{ color: '#dc2626', fontWeight: 700, mb: 2 }}>{product.price}</Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => addBuy(product)}
                  sx={{ bgcolor: '#1e293b', '&:hover': { bgcolor: '#dc2626' } }}
                >
                  AGREGAR
                </Button>

                <Button
                  variant="contained"
                  startIcon={<StarIcon />}
                  onClick={() => addFavorite(product)}
                  sx={{ bgcolor: '#1e293b', '&:hover': { bgcolor: '#dc2626' } }}
                >
                  Mis favoritos
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};