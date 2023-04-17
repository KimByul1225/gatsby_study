import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

/**
 * @description fetch메뉴 페이지를 위한 components
 */

export default function fetch() {
    return (
        <Layout title="Fetch">
            <p>fetch</p>
        </Layout>
    );
}

export const Head = ()=> <Seo title="fetch"/>

