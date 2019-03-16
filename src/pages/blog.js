import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

const blog = () => {
  return (
    <Layout>
      <div>
        <h1
          style={{
            display: "inlineBlock",
            borderBottom: "1px solid",
          }}
        >
          Khandoor Blog
        </h1>
        <StaticQuery
          query={getMarkdownPosts}
          render={data => (
            <Fragment>
              <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span style={{ color: "#bbb" }}>
                      - {node.frontmatter.date}{" "}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </div>
              ))}
            </Fragment>
          )}
        />
      </div>
    </Layout>
  )
}

export default blog
