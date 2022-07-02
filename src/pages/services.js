import React from "react";
import styled from "styled-components";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import {
  LogoContainer,
  PageContainer,
  PageContent,
  ContentContainer,
  PageTitle,
  HeroImage,
  Description,
  Button,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useServicesPage } from "../utils/queries/use-services-page";
import Logo from "../images/logo.png";
import { spacing } from "../utils/spacing";
import { Footer } from "../components/footer";

const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${spacing.customSpacing("64px")};
  padding-top: ${spacing.customSpacing("64px")};
  padding-left: ${spacing.BASE_SPACING};
  padding-right: ${spacing.BASE_SPACING};
  align-items: center;
  background-color: ${({ num }) =>
    num % 2 === 0 ? "rgba(0, 0, 0, 0.03)" : "#fff"};

  @media (max-width: ${spacing.PHONE_WIDTH}) {
    flex-direction: column-reverse;
    padding-left: 0;
    padding-right: 0;
    padding-top: ${spacing.BASE_SPACING};
    padding-bottom: ${spacing.BASE_SPACING};
  }
`;

const ItemDescription = styled(Description)`
  font-size: 22px;
`;

const ListContainer = styled.div`
  margin-top: ${spacing.customSpacing("128px")};

  @media (max-width: ${spacing.PHONE_WIDTH}) {
    margin-top: 0;
  }
`;

const ServicesPage = () => {
  const { pageTitle, service } = useServicesPage();

  return (
    <PageContainer>
      <Seo title={pageTitle} description={pageTitle} meta={[]} />
      <PageContent>
        <LogoContainer onClick={() => (window.location = "/")}>
          <img src={Logo} alt="Logo" width="100%" />
        </LogoContainer>

        <ListContainer>
          {service.map((serviceType, index) => {
            const {
              itemName,
              itemDescription: { raw },
              itemImage: {
                file: { url },
              },
            } = serviceType;

            return (
              <ServiceContainer key={index} num={index}>
                <div>
                  <PageTitle>{itemName}</PageTitle>
                  <ItemDescription
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(JSON.parse(raw)),
                    }}
                  />
                  <Button onClick={() => (window.location = "/contact")}>
                    Hubungi Kami
                  </Button>
                </div>
                <div>
                  <HeroImage
                    style={{
                      background: `url(${url}) center`,
                      backgroundSize: "cover",
                    }}
                  />
                </div>
              </ServiceContainer>
            );
          })}
        </ListContainer>
      </PageContent>
      <Footer />
    </PageContainer>
  );
};

export default ServicesPage;
