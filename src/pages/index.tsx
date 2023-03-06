import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function IndexPage() {
  return (
    <Layout title="Welcom to Dev Stickers">
      <div>
        <h1>Welcome!</h1>
      </div>
    </Layout>
    
  )
}

export const Head = ()=> <Seo title="Home"/>

// export function Head(){
//   return <title>Dev Stickers</title>
// }


