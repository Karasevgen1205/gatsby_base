import * as React from "react"
import { Link, graphql } from "gatsby"
import {  GatsbyImage, getImage } from "gatsby-plugin-image"
// StaticImage,
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  const {nodes} = data.allMarkdownRemark;
  // console.log(nodes)
  return (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
    <div className="posts">
      {nodes.map(item => {
        const {category, title, url, image} = item.frontmatter;
        const img = getImage(image);
        return (
          <div key={item.id} className="post">
            <GatsbyImage image={img} alt={title} />
            <Link to={`/${category}/${url}`}>{title}</Link>
          </div>
        );
      })}
    </div>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          url
          category
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, AVIF])
            }
          }
        }
        id
      }
    }
  }
`;