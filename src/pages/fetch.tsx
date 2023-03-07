import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';


export default function fetch() {
    return (
        <Layout title="Fetch">
            <p>fetch</p>
        </Layout>
    );
}

export const Head = ()=> <Seo title="fetch"/>

