import React from 'react';
import styled from 'styled-components';

// Styled Footer Component
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBlock>
        <FooterLink href="#">Link 1</FooterLink>
        <FooterLink href="#">Link 2</FooterLink>
        <FooterLink href="#">Link 3</FooterLink>
        <FooterLink href="#">Link 4</FooterLink>
      </FooterBlock>
      <FooterBlock>
        <FooterLink href="#">Link 5</FooterLink>
        <FooterLink href="#">Link 6</FooterLink>
        <FooterLink href="#">Link 7</FooterLink>
        <FooterLink href="#">Link 8</FooterLink>
      </FooterBlock>
      {/* Add more blocks as needed */}
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
