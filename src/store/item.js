import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
    const { allFile } = useStaticQuery(
        graphql`
        query {
          allFile(filter: {sourceInstanceName: {eq: "item"}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    price
                    artiste
                    image
                  }
                  html
                }
              }
            }
          }
        }
      `
    )
    return allFile.edges;
}

export default class SiteItem {
    constructor() {
        this.siteMetadata = useSiteMetadata()
        this.parseMetadata(this.siteMetadata)
    }

    parseMetadata(siteMetadata) {
        let title = [];
        let price = [];
        let artiste = [];
        let image = [];
        let html = [];

        for (let index = 0; index < siteMetadata.length; index++) {
            title.push(siteMetadata[index].node.childMarkdownRemark.frontmatter.title);
            price.push(siteMetadata[index].node.childMarkdownRemark.frontmatter.price);
            artiste.push(siteMetadata[index].node.childMarkdownRemark.frontmatter.artiste);
            image.push(siteMetadata[index].node.childMarkdownRemark.frontmatter.image);
            html.push(siteMetadata[index].node.childMarkdownRemark.html)
        }
        this.title = title;
        this.price = price;
        this.artiste = artiste;
        this.image = image;
        this.html = html;
    }
}