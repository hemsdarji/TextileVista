import React from "react";
import { SportShoes } from "../Data";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../store/productSlice";

const Shoes = () => {

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));

  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8vh",
        paddingTop: "6vh",
        paddingBottom: "6vh",
        paddingLeft: "6vh",
        paddingRight: "6vh",
      }}
    >
      {SportShoes.map((shoes, index) => (
        <Card sx={{ maxWidth: 500 }} key={index}>
          <CardMedia
            component="img"
            height="300"
            image={shoes.image}
            alt={shoes.alt1}
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {shoes.title}
            </Typography>
         
            <Box sx={{ display: "flex" }}>
              
              <Typography
                style={{ textDecoration: "line-through", color: "red" }}
              >
                {shoes.price}
              </Typography>

              <Typography style={{ marginLeft: "10px" }}>
                {shoes.price}
              </Typography>

            </Box>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
            sx={{marginLeft:"auto",marginRight:"auto"}}
              variant="contained"
              onClick={() => handleAdd(shoes)}
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

export default Shoes;
