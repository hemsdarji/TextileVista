import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add } from '../store/productSlice';

 const ProductList = styled.div`
  display: flex;
  gap:24px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const ProductCard = styled(Card)`
  width: calc(30% - 13vh);
  margin-bottom: 4vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 900px) {
    width: calc(100% - 20px);
  }
`;

const ProductCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const AddToCartButton = styled(Button)`
  margin-top: auto;
`;

const ProductComponent =() => {

  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <ProductList>
        {productData.map(product => (
          <ProductCard key={product.id}>
            <CardMedia
              component="img"
              alt={product.title}
              height="200"
              image={product.image}
            />
            <ProductCardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="span" color="textSecondary">
                Price: ${product.price}
              </Typography>
            </ProductCardContent>
            <AddToCartButton onClick={() => handleAdd(product)} variant="contained">Add to cart</AddToCartButton>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
  );
}

export default ProductComponent;
