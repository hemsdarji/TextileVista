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
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";



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
    top: 20%;
    left: 10%;
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
  @media (max-width: 750px) {
    display : none ;
  }
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
    id:0,
    imageSrc: "./img/A3.jpg",
    name: "Blue Levi Shirt",
    price: "$10.00",
    alt : "product 1"
  },
  {
    id:1,
    imageSrc: "./img/A6.jpg",
    name: "Pink Robe",
    price: "$4-$10",
    alt : "product 2"
  },
  {
    id:2,
    imageSrc: "./img/A4.jpg",
    name: "Women Robe",
    price: "$4-$10",
    alt : "product 3"
  },
  {
    id:3,
    imageSrc: "./img/A2.jpg",
    name: "Carousel Jacket",
    price: "$4-$10",
    alt : "product 4"
  },
];



// -------------------------------------------------------------------------------------------------
const SportShoes = [
  {
    image: "/img/s1.jpg",
    alt1: "Sport shoes item 1",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/img/s2.jpg",
    alt1: "Sport shoes item 2",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/img/s3.jpg",
    alt1: "Sport shoes item 3",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/img/s4.jpg",
    alt1: "Sport shoes item 4",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
  {
    image: "/img/s5.jpg",
    alt1: "Sport shoes item 5",
    title: "Retro Erke Sport Shoes",
    price: "$ 120.00 $ 100.00",
  },
];

// -----------------container title for new product (jacket or demin coat)----------------------

const Containertitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 20%;
  padding-right :20%;
  background-color: #e3e3de;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentBox = styled.div`
  height: 80vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4vh;
  gap: 16px;
  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
    width:100%;
    height: 20vh;
  }
 
 
`;

const Title = styled.span`
  font-size: 13vh;
  letterspacing :"2px";
  @media (max-width: 750px) {
    font-size: 6vh;
  }
`;

const ImageBox = styled.div`
  height: 80vh;
  width: 50%;
  padding-top: 10vh;
  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
    width:100%;
    padding-top: 10vh;
    height: 45vh;
  }
 
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
 
`;


const HomeSection = () => {
  return (
    <Box>
      <StyledBoxone>
        <StyledImage src="./img/header-media-bg.jpg" alt="image" />
        <OverlayText>
          <Typography variant="h5" style={responsiveText}>
           New Collection
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
        {productData.map(product => (
          <Grid item overflow="hidden" key={product.id} xs={6} sm={3}>
            <StyledImageRow
              component="img"
              alt={`Image ${product.alt}`}
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

       <Containertitle>
       <ImageBox>
      <Image src="./img/jecket1.jpg" alt="change pic" />
    </ImageBox>
    <ContentBox>
      <span>#NEW SUMMER COLLECTION 2023</span>
      <Title>JACKET</Title>
      <Button variant="contained">Shop Now</Button>
    </ContentBox>
  </Containertitle>
      
     

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
        {SportShoes.map((shoes , index)=> (
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

    {/* ------------------------------------------------ section for jacket and demin coat title start------------------------------------ */}

     <Containertitle>
    <ContentBox>
      <span>#NEW SUMMER COLLECTION 2023</span>
      <Title>DENIM COAT</Title>
      <Button variant="contained">Shop Now</Button>
    </ContentBox>
    <ImageBox>
      <Image src="./img/denim.jpg" alt="change pic" />
    </ImageBox>
  </Containertitle>
  {/* ------------------------------------------------ section for jacket and demin coat title end------------------------------------ */}

  </Box>
  );
};

export default HomeSection;
