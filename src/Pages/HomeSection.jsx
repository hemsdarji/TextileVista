import React from "react";
import { styled } from "styled-components";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Shoes from "./Shoes";
import Cloth from "./Cloth";

// ----------common style button --------

const StyledButton = styled(Button)`
  font-weight: 300;
  background-color: #fff;
`;
//----------------------------------

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
  top: 22%;
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
    display: none;
  }
`;



// -----------------container title for new product (jacket or demin coat)----------------------

const Containertitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 20%;
  padding-right: 20%;
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
    width: 100%;
    height: 27vh;
    padding-top: 1vh;
  }
`;

const Title = styled.span`
  font-size: 9vh;
  letterspacing: "2px";
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
    width: 100%;
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
      <Cloth />
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
      <Shoes />
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
