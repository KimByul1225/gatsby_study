import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function AboutUs() {
    return (
        <Layout title="About us">
            <p>sticker store</p>
        </Layout>
    );
}

export const Head = ()=> <Seo title="About Us"/>

// export function Head(){
//     return <title>About Us</title>
// }
