// import { Mail, Notifications, ShoppingCart } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import CartData from "../Pages/CartData";
// import { iconComponents } from "../Data";

const StyledNavbar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px",
  width: "100%", // Make sure the navbar spans the full width,
});

const ButtonContainer= styled.div`
display: flex;
gap : 1rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Navbar = () => {

 

  return (
    <Box>
      <Typography
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontSize: "1vw",
          paddingTop: "16px",
        }}
        variant="h6"
      >
        Free delivery from Rs.5000 - Returns within 7 days
      </Typography>

      <StyledNavbar>
        <ButtonContainer>
          <Button className="" component={Link} to="/" color="inherit">
            Home
          </Button>

          <Button component={Link} to="/product" color="inherit">
            Product
          </Button>
        </ButtonContainer>
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "3px",
            }}
            variant="h4"
          >
            Textile Vista
          </Typography>
        </Box>

        {/* <ButtonContainer>
          {iconComponents.map((iconData, index) => (
            <IconButton 
                    key={index} 
                    aria-label={iconData.label}>
                    <iconData.icon />
            </IconButton>
          ))}
        </ButtonContainer>  */}

   <CartData />
        
       
      </StyledNavbar>
    </Box>
  );
};

export default Navbar;
