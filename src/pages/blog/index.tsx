import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';


export default function blog({data}: PageProps<Queries.BlogPostsQuery>) {
    console.log(data)
    return (
        <Layout title="Blog">
            <p>blog text</p>
            {/* <ul>
                {data.allFile.nodes.map((file, index) => <li key={index}>{file.name}</li>)}
            </ul> */}
            <section>
                {
                    data.allMdx.nodes.map((item, index)=>(
                    <article key={index}>
                        <Link to={`/blog/${item.frontmatter?.slug}`}>
                            <h3>{item.frontmatter?.title}</h3>
                            <h5>{item.frontmatter?.author} in : {item.frontmatter?.category}</h5>
                            <h6>{item.frontmatter?.date}</h6>
                            <hr />
                            <p>{item.excerpt}</p>
                        </Link>
                    </article>
                    ))
                }
            </section>
        </Layout>
    );
}

// 아래의 모든과정이 페이지의 빌드과정에서 실행됨!! 즉 로딩이 없음.
export const query = graphql`
    query BlogPosts {
        allMdx {
            nodes {
                frontmatter {
                    title
                    category
                    date(formatString: "YYYY.MM.DD")
                    author
                    slug
                }
                excerpt(pruneLength: 50)
            }
        }
    }
`

// export const query = graphql`
//     query BlogTitle {
//     allFile {
//             nodes {
//                 name
//             }
//         }
//     }
// `

export const Head = ()=> <Seo title="Blog"/>


// export function Head(){
//     return <title>Blog</title>
// }
