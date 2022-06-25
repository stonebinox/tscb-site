import { graphql, useStaticQuery } from "gatsby";

export const useHomePage = (type) => {
  const {
    allContentfulHome: { nodes },
  } = useStaticQuery(graphql`
    query homePageQuery {
      allContentfulHome {
        nodes {
          title
          pageTitle
          description {
            description
          }
          heroImage {
            file {
              url
              fileName
            }
          }
          key
          photos {
            url
            title
          }
        }
      }
    }
  `);

  const mainNode = nodes?.find((node) => node?.key === type);

  return mainNode;
};
