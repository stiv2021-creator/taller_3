import React, { useContext } from 'react';
import { BuysContext } from './../../auth/hooks/BuysContext.jsx';
import { Container, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';

export const Mybuys = () => {
  const { buys } = useContext(BuysContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Mis Compras
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {buys.map((product) => (
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