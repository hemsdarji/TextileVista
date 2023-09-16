
import {  Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import CartData from "../Pages/CartData";
// import { iconComponents } from "../Data";

const StyledNavbar = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 16px",
  width: "100%", 
});

const ButtonContainer= styled.div`
display: flex;
gap : 1rem;

  @media (max-width: 750px) {
     display : none;
    flex-direction: column; 
    align-items: center; 
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
          fontSize: "1.5vh",
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
          <Button
          component={Link} to="/" 
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "3vh",
              fontWeight: "700",
              letterSpacing: "3px",
              textDecoration:"none",
              color:"black"
            }}
         
          >
            Textile Vista
          </Button>
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
