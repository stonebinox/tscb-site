import React from "react";
import styled from "styled-components";

import {
  Description,
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useHomePage } from "../utils/queries/use-home-page";
import { spacing } from "../utils/spacing";
import Logo from "../images/logo.png";
import "../fonts/fonts.css";

const LogoContainer = styled.div`
  width: 80%;
  height: ${spacing.customSpacing("80px")};
  margin: 0 auto;
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: ${spacing.customSpacing("128px")};
`;

const IndexPage = () => {
  const {
    title,
    pageTitle,
    description: { description },
  } = useHomePage();

  return (
    <PageContainer>
      <Seo title={pageTitle} description={pageTitle} meta={[]} />
      <PageContent>
        <LogoContainer>
          <img src={Logo} alt={pageTitle} width="100%" />
        </LogoContainer>
        <ContentContainer>
          <div>
            <PageTitle>{title}</PageTitle>
            <Description>{description}</Description>
          </div>
        </ContentContainer>
      </PageContent>
    </PageContainer>
  );
};

export default IndexPage;
