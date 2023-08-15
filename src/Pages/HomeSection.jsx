import React from "react";
import { styled } from "styled-components";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Height } from "@mui/icons-material";

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
  height: 65vh;
  padding-left: 3vh;
  padding-right: 3vh;
  padding-bottom: 2vh;
  padding-top: 4vh;
  @media (max-width: 750px) {
    padding-left: 2vh;
    padding-right: 2vh;
    height: 40vh;
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

// three image direction row

const Container = styled.div`
  height: 100vh;
`;

const Section = styled.div`
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 5%;
  padding-left: 10vh;
  padding-right: 10vh;
`;

const ProductBox = styled.div`
  position: relative;
  background-color: salmon;
  width: 33%;
  object-fit: cover;
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProductDetails = styled.div`
  position: absolute;
  top: 10%;
  left: 30%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const products = [
  {
    imageSrc: './public/futureproduct1.jpg',
    title: 'Men Shirt',
    description: 'Free delivery + Bonus Gift',
  },
  {
    imageSrc: './public/futureproduct2.jpg',
    title: 'Men Shirt',
    description: 'Free delivery + Bonus Gift',
  },
  {
    imageSrc: './public/futureproduct3.jpg',
    title: 'Men Shirt',
    description: 'Free delivery + Bonus Gift',
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
            </Grid>
          </Grid>
        ))}
      </StyledGridContainer>

      <Box display="flex">
        <Box
          sx={{
            width: "50%",
            height: "70vh",
            backgroundColor: "red",
            backgroundImage: "url(./public/d1.jpg)",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          sx={{
            width: "50%",
            height: "70vh",
            backgroundColor: "#EBECF0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Typography variant="p" sx={{ fontSize: "8vh" }}>
            Deal of the Day
          </Typography>
          <Typography variant="p" sx={{ fontSize: "4vh" }}>
            Summer T-Shirts – $35
          </Typography>
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
        </Box>
      </Box>
{/* 
      <Box sx={{height:"100vh"}}>
         <Box sx={{height:"30vh",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"16px",paddingTop:"112px",paddingBottom:"40px",letterSpacing:"3px",}}>
          <Typography variant="p" sx={{fontSize:"5vh"}}>Featured Collection</Typography>
          <Typography variant="span" sx={{fontSize:"2vh"}}>We collaborate with smart and creative people</Typography>
         </Box>
         <Box sx={{height:"70vh",display:"flex",flexDirection:"row",gap:"5%",paddingLeft:"10vh",paddingRight:"10vh"}}>
          <Box sx={{backgroundColor:"salmon",width:"33%",objectFit:"cover",position:"relative"}} >
            <Box sx={{objectFit:"cover",backgroundSize:"cover"}}>
            <img src="./public/futureproduct1.jpg" alt="future product 1" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
            </Box>
            <Box sx={{position:"absolute",top:"10%",left:"30%",display:"flex",flexDirection:"column",gap:"16px",alignItems:"center",justifyContent:"center"}}>
                <Typography sx={{fontSize:"40px"}} variant="p">Men Shirt</Typography>
                <Typography sx={{fontSize:"20px"}} variant="p">Free delivery + Bonus Gift</Typography>
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
               
            </Box>
          </Box>
         </Box>
      </Box> */}
          <Container>
          <Box sx={{height:"30vh",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"16px",paddingTop:"112px",paddingBottom:"40px",letterSpacing:"3px",}}>
        <Typography fontSize="5vh">Featured Collection</Typography>
        <Typography fontSize="2vh">We collaborate with smart and creative people</Typography>
      </Box>
      <Section height="70vh" direction="row">
        {products.map((product, index) => (
          <ProductBox key={index}>
            <ProductImage src={product.imageSrc} alt={`future product ${index + 1}`} />
            <ProductDetails>
              <Typography fontSize="40px">{product.title}</Typography>
              <Typography fontSize="20px">{product.description}</Typography>
              <Button
            component={Link}
            to="/product"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "#65636b",
            }}
            variant="contained"
          >
            Shop Now
          </Button>
            </ProductDetails>
          </ProductBox>
        ))}
      </Section>
    </Container>

    </Box>
  );
};

export default HomeSection;
