import React, { useState } from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddShoppingCart, Delete, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { remove } from "../store/productSlice";
import CloseIcon from "@mui/icons-material/Close";
import "./CardData.css";
import styled from "styled-components";



const ProductList = styled.div`
display: flex;
gap:4px;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 900px) {
  justify-content: center;
}
`;

const ProductCard = styled(Card)`
width: calc(20% - -15vh);
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



const CartData = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const [openDialog, setOpenDialog] = useState(false);

  //   store change so action dispatch
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handlePayNow = () => {
    // For demonstration, log the total price and simulate a payment process
    console.log("Total Price:", totalPrice);
    console.log("Initiating payment process...");
    // Add integration with a real payment gateway here
  };

  
  return (
    <div>
      <Button onClick={handleOpenDialog} color="inherit">
        View Cart
      </Button>
      <Badge badgeContent={items.length} color="primary">
        <ShoppingCart color="action" />
      </Badge>

      <Dialog
        className="dialog-section"
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Cart Items</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            <CloseIcon />
          </Button>
        </DialogActions>

        {/* this is content part */}
        <DialogContent className="dialog-content">
          {items.length === 0 ? 
          (
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <img src="./img/emptycart.jpg" alt="Empty Cart" style={{ width: '200px', height: '200px' }} />
            <Typography variant="body1">Your cart is empty.</Typography>
            <IconButton color="primary">
              <AddShoppingCart />
            </IconButton>
            <Typography variant="body2">Start adding items to your cart!</Typography>
          </Box>
          ) 
          :
          (
            <Box>
            <ProductList>
              {items.map((product) => (
                <ProductCard key={product.id}>
                  <CardMedia component="img" alt={product.title} height="200" image={product.image} />
                  <ProductCardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="span" color="textSecondary">
                      Price: ${product.price}
                    </Typography>
                  </ProductCardContent>
                  <Button
                    variant="contained"
                    onClick={() => handleRemove(product.id)}
                    startIcon={<Delete />}
                  >
                    Remove
                  </Button>
                </ProductCard>
              ))}
            </ProductList>
              
            <Button
                    variant="contained"
                    onClick={() => handlePayNow(product.id)}
                    // startIcon={<Delete />}
                  >
                    PaYNow
                  </Button>

            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartData;
