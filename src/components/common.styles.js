import styled from "styled-components";

import { spacing } from "../utils/spacing";

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const PageContent = styled.div`
  padding: ${spacing.BASE_SPACING};
  width: 100%;
  max-width: ${spacing.customSpacing("1280px")};
  margin: 0 auto;
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
`;
