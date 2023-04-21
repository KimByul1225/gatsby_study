import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

/**
 * @description Products의 상세 내용을 보여주기 위한 components
 */

export default function ProductDetail({data}: PageProps<Queries.ProductQuery>) {
    const image = getImage(data.contentfulProduct?.preview?.gatsbyImageData!);
    return (
        <Layout
            title={data.contentfulProduct?.name!}
        >
            <GatsbyImage
                image={image!}
                alt={data.contentfulProduct?.name!}
            />
            <h2>{data.contentfulProduct?.price}</h2>
        </Layout>
    )
}
export const query = graphql`
    query Product($id: String!) {
        # 해당 문법에 대한 추후 스터디 필요.
        contentfulProduct(id: {eq: $id}) {
            id
            name
            price
            preview {
                gatsbyImageData(height: 250, placeholder: BLURRED)
            }
        }
    }`
