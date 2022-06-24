import { graphql, useStaticQuery } from "gatsby";

export const useHomePage = () => {
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
        }
      }
    }
  `);

  const mainNode = nodes[0];

  return mainNode;
};
