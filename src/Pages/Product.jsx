import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  CardActions,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../store/productSlice";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8vh",
        }}
      >
        {productData.map((product) => (
          <Card
            sx={{
              maxWidth: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight:"auto",
            }}
            key={product.id}
          >
            <CardMedia
              component="img"
              alt={product.title}
              height="200"
              image={product.image}
            />
            <CardContent>
              <Typography
                sx={{ width: "20vh", height: "20vh" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {product.title}
              </Typography>

              <Typography>{product.price}</Typography>
            </CardContent>

            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                variant="contained"
                onClick={() => handleAdd(product)}
                size="small"
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ProductComponent;
