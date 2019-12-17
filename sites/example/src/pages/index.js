import  React from 'react'
import { graphql } from 'gatsby'

import Index from "gatsby-theme-signalwerk/src/pages";


class IndexRoot extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Index {...this.props} />
      </React.Fragment>
    )
  }
}

export default IndexRoot

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorUrl
      }
    }
    post: mdx(fields: {slug: {eq: "root"}}) {
      id
      excerpt
      body
      frontmatter {
        title
        author
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
      wordCount {
        words
      }
    }
  }
`
