import { graphql, useStaticQuery } from "gatsby";

export const useAboutPage = (type) => {
  const {
    allContentfulAboutPage: { nodes },
  } = useStaticQuery(graphql`
    query aboutPageQuery {
      allContentfulAboutPage {
        nodes {
          pageTitle
          description {
            raw
          }
          image {
            file {
              fileName
              url
            }
          }
          photoGrid {
            photo {
              url
              filename
            }
          }
        }
      }
    }
  `);

  return nodes[0];
};
