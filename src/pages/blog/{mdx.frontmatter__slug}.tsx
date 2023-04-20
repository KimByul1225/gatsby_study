import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlogPostProps {
    data: Queries.PostDetailQuery,
    children: any
}

/**
 * @description blog 상세 내용을 보여주기 위한 components
 */

export default function BlogPost({data, children}: IBlogPostProps) {
    console.log(data);
    console.log(children);

    const image = getImage(data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!);
    // getImage function사용해서 이미지를 가지고 옴.


    return (
        <Layout 
            title=""
        >
            <GatsbyImage 
                image={image as any}
                alt={data.mdx?.frontmatter?.title!}
            />
            <div>{children}</div>
        </Layout>
    )
}

export const query = graphql`
    query PostDetail($frontmatter__slug: String) {
        mdx(frontmatter: {slug: {eq: $frontmatter__slug}}) {
            body
            frontmatter {
                author
                category
                date
                slug
                title
                headerImage {
                    childImageSharp {
                        gatsbyImageData(height: 450, placeholder: BLURRED)
                    }
                }
            }
        }
    }

`

export const Head = ({data}: IBlogPostProps)=> <Seo title={data.mdx?.frontmatter?.title!}/>
