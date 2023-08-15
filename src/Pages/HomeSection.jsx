import React from "react";
import { styled } from "styled-components";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StyledBoxone = styled(Box)`
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  position: relative;
  width: "100%";
  @media (max-width: 750px) {
    min-height: 10vh;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const OverlayText = styled.div`
  position: absolute;
  padding: 1rem;
  top: 10%;
  left: 10%;
  width: 40%;
  @media (max-width: 750px) {
    top: 0%;
    left: 5%;
    padding: 0.3rem;
  }
`;
const responsiveText = {
  marginBottom: "10px",
  fontSize: "5vw",
  fontWeight: "bold",
  color: "#333",
};

const StyleTypography = styled(Typography)`
  paddingtop: 20px;
  paddingbottom: 20px;
  fontsize: 1vw;
`;

const StyledImageRow = styled(CardMedia)`
  height: 40vh;
  transition: transform 0.3s;
  &:hover {
    transform: scale(0.9);
  }
  @media (max-width: 750px) {
    height: 20vh;
  }
`;

const StyledGridContainer = styled(Grid)`
  height: 80vh;
  padding-left: 3vh;
  padding-right: 3vh;
  padding-bottom: 2vh;
  padding-top: 2vh;
  @media (max-width: 750px) {
    padding-top: 2vh;
  }
`;
const StyledHeading = styled(Typography)`
  font-size: 1.5rem;
  padding-top: 24px;
  padding-top: 24px;
`;

const StyledPriceRange = styled(Typography)`
  font-size: 1rem;
`;

const productData = [
  {
    imageSrc: "./public/A3.jpg",
    name: "Blue Levi Shirt",
    price: "$10.00",
  },
  {
    imageSrc: "./public/A6.jpg",
    name: "Pink Robe",
    price: "$4-$10",
  },
  {
    imageSrc: "./public/A4.jpg",
    name: "Women Robe",
    price: "$4-$10",
  },
  {
    imageSrc: "./public/A2.jpg",
    name: "Carousel Jacket",
    price: "$4-$10",
  },
];

const HomeSection = () => {
  return (
    <Box>
      <StyledBoxone>
        <StyledImage src="./public/header-media-bg.jpg" alt="image" />
        <OverlayText>
          <Typography variant="h5" style={responsiveText}>
            Special Offers
          </Typography>
          <Typography variant="h5" style={responsiveText}>
            Just For You
          </Typography>
          <StyleTypography
            variant="body1"
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              fontSize: "1vw",
            }}
          >
            Welcome to TextileVista, where fashion meets comfort and quality.
            Discover the latest trends, quality fabrics, stylish choices for all
            occasions, and our eco-friendly commitment.
          </StyleTypography>

          <Button
            component={Link}
            to="/product"
            sx={{
              fontSize: "1vw",
              fontWeight: "700",
              backgroundColor: "#65636b",
            }}
            variant="contained"
          >
            Shop Now
          </Button>
        </OverlayText>
      </StyledBoxone>

      <StyledGridContainer container spacing={4}>
        {productData.map((product, index) => (
          <Grid item xs={3} overflow="hidden" key={index}>
            <StyledImageRow
              component="img"
              alt={`Image ${index + 1}`}
              src={product.imageSrc}
            />
            <Box paddingLeft="94px">
              <StyledHeading variant="p">{product.name}</StyledHeading>
              <StyledPriceRange variant="h6">{product.price}</StyledPriceRange>
              <Button
                component={Link}
                to="/product"
                sx={{
                  fontSize: ".7vw",
                  fontWeight: "500",
                  backgroundColor: "#11111b",
                }}
                variant="contained"
              >
                Shop Now
              </Button>
            </Box>
          </Grid>
        ))}
      </StyledGridContainer>
    </Box>
  );
};

export default HomeSection;
