import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
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
                  background
                  logo {
                    src {
                      relativePath
                    }
                  }
                }
              }
              childImageSharp {
                fixed {
                  src
                  originalName
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
    var logo = ""

    siteMetadata.forEach(element => {
      if(element.node.childMarkdownRemark != null) {
        this.title = element.node.childMarkdownRemark.frontmatter.title
        this.description = element.node.childMarkdownRemark.frontmatter.description
        logo = element.node.childMarkdownRemark.frontmatter.logo[0][0].src.relativePath
        this.background = element.node.childMarkdownRemark.frontmatter.background
      }
    });
    siteMetadata.forEach(element => {
      if (element.node.childMarkdownRemark === null) {
        if (element.node.childImageSharp.fixed.originalName === logo) {
          this.logo = element.node.childImageSharp.fixed.src
        }
      }
    })
  }
}