import { graphql, useStaticQuery } from "gatsby";

export const useHomePage = (type) => {
  const {
    allContentfulHome: { nodes },
  } = useStaticQuery(graphql`
    query servicePageeQuery {
      allContentfulServicesPage {
        nodes {
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
