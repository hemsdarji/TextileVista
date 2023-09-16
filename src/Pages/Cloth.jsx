import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { productData } from "../Data";
import { add } from "../store/productSlice";
import { useDispatch } from "react-redux";

const Cloth = () => {
  const dispatch = useDispatch();

  const handleAdd = (productItem) => {
    dispatch(add(productItem));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10vh",
        paddingTop: "6vh",
        paddingBottom: "6vh",
        paddingLeft: "6vh",
        paddingRight: "6vh",
      }}
    >
      {productData.map((productItem, index) => (
        <Card
          sx={{
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
          }}
          key={index}
        >
          <CardMedia
            component="img"
            height="400"
            src={productItem.imageSrc}
            alt={productItem.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productItem.name}
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography
                style={{ textDecoration: "line-through", color: "red" }}
              >
                {productItem.price}
              </Typography>

              <Typography style={{ marginLeft: "10px" }}>
                {productItem.orgPrice}
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              onClick={() => handleAdd(productItem)}
              size="small"
            >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Cloth;
