import React from "react";

import {
  Button,
  Description,
  PageContainer,
  PageContent,
  PageTitle,
  LogoContainer,
  ContentContainer,
  HeroImage,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useHomePage } from "../utils/queries/use-home-page";
import Logo from "../images/logo.png";
import "../fonts/fonts.css";
import { Footer } from "../components/footer";
import { PhotoGrid } from "../components/photo-grid";

const IndexPage = () => {
  const {
    title,
    pageTitle,
    description: { description },
    heroImage: {
      file: { url, fileName },
    },
    photoGrid: { photo: photos = [] },
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
            <Button onClick={() => (window.location = "/contact")}>
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
        <PhotoGrid photos={photos} />
      </PageContent>
      <Footer />
    </PageContainer>
  );
};

export default IndexPage;
