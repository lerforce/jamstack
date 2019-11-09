import React from "react"
import { graphql } from "gatsby"
import RootLayout from '../components/RootLayout'
import Home from '../components/Home'
import HomeGrid from '../components/HomeGrid'
import AppBar from '../components/AppBar'
import Config from '../store/config'

export default ({data}) => {

  var config = new Config()

  console.log(config)
  if (config.layout === "list") {
    return (
      <RootLayout>
        <AppBar/>
        <Home />
    </RootLayout>
  )
  } else {
    return (
      <RootLayout>
        <AppBar/>
        <HomeGrid/>
      </RootLayout>
    )
  }
}

export const query = graphql`
  query {
    markdownRemark {
      html
    }
  }
`