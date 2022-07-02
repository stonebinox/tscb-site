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
  ContentContainer,
  HeroImage,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useHomePage } from "../utils/queries/use-home-page";
import { spacing } from "../utils/spacing";
import Logo from "../images/logo.png";
import "../fonts/fonts.css";

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
            <Button onClick={() => (window.location = "/services")}>
              Kelas Kami
            </Button>
            <Button onClick={() => (window.location = "/about")}>
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
