import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
    const { allFile } = useStaticQuery(
        graphql`
        query {
          allFile(filter: {sourceInstanceName: {eq: "description"}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    description
                    
                  }
                }
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
      `
    )
    return allFile.edges[2].node.childImageSharp
}