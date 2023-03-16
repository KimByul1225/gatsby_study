import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';


export default function blog({data}: PageProps<Queries.BlogTitleQuery>) {
    console.log(data)
    return (
        <Layout title="Blog">
            <p>blog text</p>
            <ul>
                {data.allFile.nodes.map((file, index) => <li key={index}>{file.name}</li>)}
            </ul>
        </Layout>
    );
}

export const query = graphql`
    query BlogTitle {
    allFile {
            nodes {
                name
            }
        }
    }
`

export const Head = ()=> <Seo title="Blog"/>


// export function Head(){
//     return <title>Blog</title>
// }
