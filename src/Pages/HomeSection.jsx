import React from "react";
import { styled } from "styled-components";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Block } from "@mui/icons-material";

// ----------common style button --------
const StyledButton = styled(Button)`
  font-weight: 300;
  background-color: #65636b;
`;

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
  minheight: 65vh;
  padding-left: 3vh;
  padding-right: 3vh;
  padding-bottom: 2vh;
  padding-top: 4vh;
  @media (max-width: 750px) {
    padding-left: 2vh;
    padding-right: 2vh;
  }
`;
const StyledHeading = styled(Typography)`
  font-size: 1.5rem;
  padding-top: 24px;
  @media (max-width: 750px) {
    font-size: 0.8rem;
  }
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

//  -------------------------Featured Collection section  atyled component ------------------------------

const StyledBoxDeal = styled(Box)`
  display: flex;
  width: 100%;
  height: 70vh;
  @media (max-width: 750px) {
    display: block;
    height: 20vh;
  }
`;

const StyledImageBox = styled(Box)`
  width: 50%;
  background-color: red;
  background-image: url(./public/d1.jpg);
  background-size: cover;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const StyledContentBox = styled(Box)`
  width: 50%;
  background-color: #ebecf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media (max-width: 750px) {
    width: 100%;
    height: 35vh;
  }
`;

const StyledTypographyLarge = styled(Typography)`
  font-size: 8vh;
`;

const StyledTypographySmall = styled(Typography)`
  font-size: 4vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledButtonContainer = styled(StyledButton)`
  text-align: center;
`;

// ------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
const SportShoes = [
  {
    image: "/public/s1.jpg",
    alt1: "Sport shoes item 1",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/public/s2.jpg",
    alt1: "Sport shoes item 2",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/public/s3.jpg",
    alt1: "Sport shoes item 3",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/public/s4.jpg",
    alt1: "Sport shoes item 4",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/public/s5.jpg",
    alt1: "Sport shoes item 5",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
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

          <StyledButton
            component={Link}
            to="/product"
            variant="contained"
            fontSize="16px"
          >
            Shop Now
          </StyledButton>
        </OverlayText>
      </StyledBoxone>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <StyledGridContainer container spacing={4}>
        {productData.map((product, index) => (
          <Grid item overflow="hidden" key={index} xs={6} sm={3}>
            <StyledImageRow
              component="img"
              alt={`Image ${index + 1}`}
              src={product.imageSrc}
            />
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <StyledHeading variant="p">{product.name}</StyledHeading>
              <StyledPriceRange variant="span">
                {product.price}
              </StyledPriceRange>

              <StyledButton
                component={Link}
                to="/product"
                variant="contained"
                fontSize="16px"
              >
                Shop Now
              </StyledButton>
            </Grid>
          </Grid>
        ))}
      </StyledGridContainer>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <StyledBoxDeal>
        <StyledImageBox />
        <StyledContentBox>
          <StyledTypographyLarge variant="p">
            Deal of the Day
          </StyledTypographyLarge>
          <StyledTypographySmall variant="p">
            Summer T-Shirts – $35
          </StyledTypographySmall>
          <StyledLink to="/product">
            <StyledButtonContainer>Shop Now</StyledButtonContainer>
          </StyledLink>
        </StyledContentBox>
      </StyledBoxDeal>
      {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

      <Box
        sx={{
          height: "30%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingTop: "112px",
          paddingBottom: "40px",
          letterSpacing: "3px",
        }}
      >
        <Typography fontSize="5vh">Featured Collection</Typography>
        <Typography fontSize="2vh">
          We collaborate with smart and creative people
        </Typography>
      </Box>

      {/* -----------------------------------------------------Featured Collection section -start--------------------------------------- */}

      {/* <Box
          sx={{
            height: "70%",
            width :"100%",
           
          }}
        >
          {products.map((product, index) => (
            <ProductBox key={index} >
              <ProductImage
                src={product.imageSrc}
                alt={`future product ${index + 1}`}
              />
              <ProductDetails>
                <Typography fontSize="40px">{product.title}</Typography>
                <Typography fontSize="20px">{product.description}</Typography>

                <StyledButton
                  component={Link}
                  to="/product"
                  variant="contained"
                >
                  Shop Now
                </StyledButton>

              </ProductDetails>
            </ProductBox>
          ))}
        </Box>
      </Container> */}

      {/* -----------------------------------------------------Featured Collection section end---------------------------------------- */}

      {/* -------------------------------------------------------------- shoes section start----------------------------------------------------------- */}

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
          <Card sx={{ maxWidth: 500 }}>
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
              <Typography variant="body2" color="text.secondary">
                {shoes.price}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button size="small">Share</Button>
              <Button size="small">Add to cart</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      {/* -------------------------------------------------------------- shoes section end ----------------------------------------------------------- */}
    </Box>
  );
};

export default HomeSection;
