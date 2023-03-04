import React from 'react';
import { Link } from "gatsby"

interface ILayoutProps{
    children: any;
    title: string;
}

function Layout({children, title}: ILayoutProps) {
    return (
        <div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{title}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout;