import styled from "styled-components";

import { spacing } from "../utils/spacing";

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: ${spacing.customSpacing("412px")}) {
    overflow-x: hidden;
  }
`;

export const PageContent = styled.div`
  padding: ${spacing.BASE_SPACING};
  width: 100%;
  max-width: ${spacing.customSpacing("1280px")};
  margin: 0 auto;

  @media (max-width: ${spacing.customSpacing("412px")}) {
    padding: ${spacing.HALF_BASE_SPACING};
  }
`;

export const PageTitle = styled.h1`
  color: #000;
  font-family: "Cursive", sans-serif;
  font-size: 64px;
`;

export const Description = styled.p`
  font-family: "Paragraph";
  color: #333;
  font-size: 32px;
  letter-spacing: 1px;

  @media (max-width: ${spacing.customSpacing("412px")}) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  background-color: #000;
  font-family: "Paragraph",
  font-size: 32px;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  padding: ${spacing.BASE_SPACING};
  letter-spacing: 1px;
  outline: 0;
  margin-right: ${spacing.BASE_SPACING};
  cursor: pointer;
`;

export const Footer = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: auto;
  text-align: center;
  padding: ${spacing.QUARTER_BASE_SPACING};
  font-family: "Paragraph";
  color: #333;
  background-color: #fff;
`;

export const LogoContainer = styled.div`
  width: 80%;
  height: ${spacing.customSpacing("80px")};
  margin: 0 auto;
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};
  cursor: pointer;

  @media (max-width: ${spacing.customSpacing("412px")}) {
    margin-bottom: 0;
  }
`;
