
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ShoppingCart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { remove } from '../store/productSlice';
import CloseIcon from '@mui/icons-material/Close';
import "./CardData.css";


const CartData = () => {
  const dispatch  = useDispatch();
    const items = useSelector((state) => state.cart);

  const [openDialog, setOpenDialog] = useState(false);
  

//   store change so action dispatch 
const handleRemove = (productId) => {
   dispatch(remove(productId))
}
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} color="inherit">
        View Cart
      </Button>
      <Badge badgeContent={items.length} color="primary">
          <ShoppingCart color="action" />
        </Badge>

      <Dialog  className='dialog-section' open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Cart Items</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogContent>
        <div className='dialog-content'>
            {items.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              items.map((product) => (
                <Card key={product.id}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="200"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="span" color="textSecondary">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                  <Button
                    onClick={() => handleRemove(product.id)}
                    variant="contained"
                  >
                    Remove
                  </Button>
                </Card>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartData;
