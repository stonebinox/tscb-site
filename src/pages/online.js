import React from "react";
import styled from "styled-components";

import {
  Button,
  Description,
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
import { Footer } from "../components/footer";

const OnlinePage = () => {
  const {
    title,
    pageTitle,
    description: { description },
    heroImage: {
      file: { url, fileName },
    },
    photos = [],
  } = useHomePage("online");

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
          </div>
          <HeroImage
            style={{
              background: `url(${url}) center`,
              backgroundSize: "cover",
            }}
          />
        </ContentContainer>
        <Button>kelas membuat sabun padat alami</Button>
        <Button>kelas membuat sabun cair alami</Button>
        <Button>kelas membuat kosmetik dasar</Button>
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
      <Footer />
    </PageContainer>
  );
};

export default OnlinePage;
