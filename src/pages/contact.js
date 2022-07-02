import React from "react";
import styled from "styled-components";

import {
  ContentContainer,
  Description,
  LogoContainer,
  PageContainer,
  PageContent,
  PageTitle,
} from "../components/common.styles";
import Seo from "../components/seo";
import { useContactPage } from "../utils/queries/use-contact-page";
import Logo from "../images/logo.png";
import { spacing } from "../utils/spacing";
import { Footer } from "../components/footer";

const MapContainer = styled.div`
  flex-shrink: 0;
  width: ${spacing.customSpacing("400px")};
  border: 2px solid #fff;
  box-shadow: 0px 5px 10px #888;
`;

const ContactPage = () => {
  const { pageTitle, address, whatsapp, email } = useContactPage();

  return (
    <PageContainer>
      <Seo title={pageTitle} description={pageTitle} meta={[]} />
      <PageContent>
        <LogoContainer onClick={() => (window.location = "/")}>
          <img src={Logo} alt="Logo" width="100%" />
        </LogoContainer>
        <ContentContainer>
          <div>
            <PageTitle>Workshop</PageTitle>
            <Description>{address || ""}</Description>
            <PageTitle>Whatsapp</PageTitle>
            <Description>{whatsapp || ""}</Description>
            <PageTitle>Email</PageTitle>
            <Description>
              <a href="mailto:{email}">{email || ""}</a>
            </Description>
          </div>
          <MapContainer>
            <iframe
              frameborder="0"
              scrolling="no"
              src="https://maps.google.com/maps?q=The%20soap%20class%20bali&amp;t=m&amp;z=20&amp;output=embed&amp;iwloc=near"
              title="The soap class bali"
              aria-label="The soap class bali"
              width="100%"
              height="500"
            />
          </MapContainer>
        </ContentContainer>
      </PageContent>
      <Footer />
    </PageContainer>
  );
};

export default ContactPage;
