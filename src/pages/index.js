import React from "react";
import styled from "styled-components";

import {
  Button,
  Description,
  Footer,
  PageContainer,
  PageContent,
  PageTitle,
  LogoContainer,
  PhotosContainer,
  Photo,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useHomePage } from "../utils/queries/use-home-page";
import { spacing } from "../utils/spacing";
import Logo from "../images/logo.png";
import "../fonts/fonts.css";

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: ${spacing.customSpacing("128px")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${spacing.PHONE_WIDTH}) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const HeroImage = styled.div`
  width: 350px;
  height: 300px;
  border: 2px solid #fff;
  overflow: hidden;
  box-shadow: 0px 5px 10px #888;
  border-radius: 4px;
  margin-right: ${spacing.DOUBLE_BASE_SPACING};
  margin-left: ${spacing.BASE_SPACING};

  @media (max-width: ${spacing.PHONE_WIDTH}) {
    margin-top: ${spacing.DOUBLE_BASE_SPACING};
    margin-bottom: ${spacing.DOUBLE_BASE_SPACING};
  }
`;

const IndexPage = () => {
  const {
    title,
    pageTitle,
    description: { description },
    heroImage: {
      file: { url, fileName },
    },
    photos = [],
  } = useHomePage("home");

  return (
    <PageContainer>
      <Seo title={pageTitle} description={pageTitle} meta={[]} />
      <PageContent>
        <LogoContainer onClick={() => (window.location = "/")}>
          <img src={Logo} alt={fileName} width="100%" />
        </LogoContainer>
        <ContentContainer>
          <div>
            <PageTitle>{title}</PageTitle>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
            <Button onClick={() => (window.location = "/offline")}>
              Kelas Kami
            </Button>
            <Button onClick={() => (window.location = "/online")}>
              Tentang Kami
            </Button>
            <Button onClick={() => (window.location = "/online")}>
              Workshop Dan Kontak
            </Button>
          </div>
          <HeroImage
            style={{
              background: `url(${url}) center`,
              backgroundSize: "cover",
            }}
          />
        </ContentContainer>
        <PhotosContainer>
          {photos?.map((photo, index) => (
            <Photo
              key={index}
              style={{
                background: `url(${photo.url}) center`,
                backgroundSize: "cover",
              }}
            />
          ))}
        </PhotosContainer>
      </PageContent>
      <Footer>The Soap Class Bali &copy; {new Date().getFullYear()}</Footer>
    </PageContainer>
  );
};

export default IndexPage;
