import React from "react";
import styled from "styled-components";
// import PublicIcon from "@material-ui/icons/Public";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
import { Public, Facebook, Twitter, Instagram } from "@material-ui/icons";

// import { PublicIcon, AccessAlarm, ThreeDRotation } from "@material-ui/icons";
const FooterOuter = styled.footer`
  width: 100%;
`;

const FooterSection = styled.section`
  padding: 0 20px;
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: space-between;
`;
const FooterFirstChild = styled.ul`
  margin: 8px 0;
  list-style: none;
  width: 40%;
  display: flex;
  // flex-direction: row;
  justify-content: space-between;
`;
const FooterSecondChild = styled.ul`
  margin: 8px 0;
  list-style: none;
  width: 20%;
  display: flex;
  justify-content: space-between;
`;
const Footer = () => {
  return (
    <FooterOuter>
      <FooterSection>
        <FooterFirstChild>
          <li>&copy; 2020 Iankim. All rights reserved</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </FooterFirstChild>
        <FooterSecondChild>
          <li>
            <Public>English(CA)</Public>
          </li>
          <li>$ CAD</li>
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
        </FooterSecondChild>
      </FooterSection>
    </FooterOuter>
  );
};

export default Footer;
