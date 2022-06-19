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
        }
      }
    }
  `);

  const mainNode = nodes[0];

  return mainNode;
};
