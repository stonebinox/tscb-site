import { graphql, useStaticQuery } from "gatsby";

export const useContactPage = (type) => {
  const {
    allContentfulContactPage: { nodes },
  } = useStaticQuery(graphql`
    query contactPageeQuery {
      allContentfulContactPage {
        nodes {
          pageTitle
          address
          whatsapp
          email
        }
      }
    }
  `);

  return nodes[0];
};
