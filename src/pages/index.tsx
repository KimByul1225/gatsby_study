import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { graphql, PageProps, Link } from "gatsby"

export default function IndexPage({ data }:PageProps<Queries.ProductsQuery>) {
  return (
    <Layout title="배포를 위한 테스트 진행">
      <div>
        <h1>Welcome!</h1>
        <StaticImage src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80" alt="Stickers"
        />
      </div>
      <div>
        {
          data.allContentfulProduct.nodes.map((item, index) => {
            return(
              <div key={index}>
                <GatsbyImage
                  image={getImage(item.preview?.gatsbyImageData!)!}
                  alt={item.name!}
                />
                <Link
                  to={`/products/${item.id}`}
                >
                  <h2>{item.name}</h2>
                  <h4>$ {item.price}</h4>
                </Link>
                
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}
export const query = graphql`
  query Products {
    allContentfulProduct {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 450)
        }
      }
    }
  }
`


export const Head = ()=> <Seo title="Home"/>

// export function Head(){
//   return <title>Dev Stickers</title>
// }


