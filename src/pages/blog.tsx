import React from 'react';
import Layout from '../components/Layout';


export default function blog() {
    return (
        <Layout title="Blog">
            <p>blog text</p>
        </Layout>
    );
}

export function Head(){
    return <title>Blog</title>
}
