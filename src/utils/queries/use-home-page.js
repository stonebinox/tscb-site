import { graphql, useStaticQuery } from "gatsby";

const types = {
  home: 0,
  offline: 1,
};

export const useHomePage = (type) => {
  const node = types[type];

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

  const mainNode = nodes[node];

  return mainNode;
};
