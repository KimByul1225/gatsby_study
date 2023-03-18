import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { StaticImage } from "gatsby-plugin-image"

export default function IndexPage() {
  return (
    <Layout title="Welcom to Dev Stickers">
      <div>
        <h1>Welcome!</h1>
        <StaticImage src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80" alt="Stickers"
        />
      </div>
    </Layout>
    
  )
}

export const Head = ()=> <Seo title="Home"/>

// export function Head(){
//   return <title>Dev Stickers</title>
// }


