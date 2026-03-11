import React, { useContext } from 'react';
import { FavoritesContext } from './../hooks/FavoritesContext';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

export const Myfavorities = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Mis Favoritos
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {favorites.map((product) => (
          <Card
            key={product.id}
            sx={{ minWidth: 250, flex: '1 1 250px' }}
          >
            <CardMedia component="img" height="150" image={product.image} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};