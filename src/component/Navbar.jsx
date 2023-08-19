import { Mail, Notifications, ShoppingCart } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";



const StyledNavbar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px",
  width: "100%", // Make sure the navbar spans the full width,
});

const ButtonContainer = styled("div")({
  display: "flex",
  gap: "1rem",

});

const iconComponents = [
  { icon: ShoppingCart, label: "Shopping Cart" },
  { icon: Mail, label: "Mail" },
  { icon: Notifications, label: "Notifications" },
];



const Navbar = () => {
  return (
    <Box>
      <Typography
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontSize: "1vw",
          paddingTop:"16px"
        }}
        variant="h6"
      >
        Free delivery from Rs.5000 - Returns within 7 days
      </Typography>

      <StyledNavbar>
        <ButtonContainer>
          <Button 
                 component={Link}
                 to="/" 
                 color="inherit">
                 Home
          </Button>

          <Button component={Link}    
                  to="/product" 
                  color="inherit">
                  Product
          </Button>
        </ButtonContainer>
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "2vw",
              fontWeight:"700",
              letterSpacing:"3px"
            }}
            variant="h4"
          >
            Textile Vista
          </Typography>
        </Box>

        <ButtonContainer>
          {iconComponents.map((iconData, index) => (
            <IconButton 
                    key={index} 
                    aria-label={iconData.label}>
                    <iconData.icon />
            </IconButton>
          ))}
        </ButtonContainer>
      </StyledNavbar>
    </Box>
  );
};

export default Navbar;
