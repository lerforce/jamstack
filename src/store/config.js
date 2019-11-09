import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "config"}}) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  layout
                }
              }
            }
          }
        }
      }
    `)
    return allFile.edges
}

export default class SiteDescription {
  constructor() {
    this.siteMetadata = useSiteMetadata()
    this.parseMetadata(this.siteMetadata)
  }

  parseMetadata(siteMetadata) {
    siteMetadata.forEach(element => {
      if(element.node.childMarkdownRemark != null) {
        this.layout = element.node.childMarkdownRemark.frontmatter.layout
      }
    });
  }
}