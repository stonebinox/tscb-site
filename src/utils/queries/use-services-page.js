import { graphql, useStaticQuery } from "gatsby";

export const useServicesPage = (type) => {
  const {
    allContentfulServicesPage: { nodes },
  } = useStaticQuery(graphql`
    query servicePageeQuery {
      allContentfulServicesPage {
        nodes {
          pageTitle
          service {
            itemName
            itemDescription {
              raw
            }
            itemImage {
              file {
                fileName
                url
              }
            }
          }
        }
      }
    }
  `);

  return nodes[0];
};
