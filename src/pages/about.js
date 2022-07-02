import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import {
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

const AboutPage = () => {
  const {
    pageTitle,
    description: { raw },
    image: {
      file: { fileName, url },
    },
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
          </div>
          <HeroImage
            style={{
              background: `url(${url}) center`,
              backgroundSize: "cover",
            }}
          />
        </ContentContainer>
      </PageContent>
    </PageContainer>
  );
};

export default AboutPage;
