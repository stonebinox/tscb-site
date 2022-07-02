import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import {
  Button,
  ContentContainer,
  Description,
  HeroImage,
  LogoContainer,
  PageContainer,
  PageContent,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useAboutPage } from "../utils/queries/use-about-page";
import Logo from "../images/logo.png";
import { Footer } from "../components/footer";
import { PhotoGrid } from "../components/photo-grid";

const AboutPage = () => {
  const {
    pageTitle,
    description: { raw },
    image: {
      file: { fileName, url },
    },
    photoGrid: { photo: photos = [] },
  } = useAboutPage();

  return (
    <PageContainer>
      <Seo title={pageTitle} description={pageTitle} meta={[]} />
      <PageContent>
        <LogoContainer onClick={() => (window.location = "/")}>
          <img src={Logo} alt="Logo" width="100%" />
        </LogoContainer>
        <ContentContainer>
          <div>
            <Description
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(JSON.parse(raw)),
              }}
            />
            <Button onClick={() => (window.location = "/services")}>
              Kelas Kami
            </Button>
            <Button onClick={() => (window.location = "/contact")}>
              Hubungi Kami
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

export default AboutPage;
