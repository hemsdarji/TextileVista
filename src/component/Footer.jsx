import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0000ff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Box
        sx={{
          display: 'flex',
          letterSpacing:'1px',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          gap: { xs: '20px', md: '30vh' },
        }}
      >
        <FooterBlock>
          <Typography variant="h5">Get to Know Us</Typography>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Press Releases</FooterLink>
          <FooterLink href="#">Amazon Science</FooterLink>
        </FooterBlock>
        <FooterBlock>
          <Typography variant="h5">Connect with Us</Typography>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
        </FooterBlock>
        <FooterBlock>
          <Typography variant="h5">Let Us Help You</Typography>
          <FooterLink href="#">Your Account</FooterLink>
          <FooterLink href="#">Returns Centre</FooterLink>
          <FooterLink href="#">100% Purchase Protection</FooterLink>
          <FooterLink href="#">Help</FooterLink>
        </FooterBlock>
      </Box>

      <Typography
        variant="body2"
        align="center"
        sx={{ marginTop: '24px', fontSize: '0.9rem',letterSpacing:'2px' }}
      >
        &copy;2023 TextileVista. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
