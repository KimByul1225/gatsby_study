import React from 'react';
import { Link } from "gatsby";


interface ILayoutProps{
    children: any;
    title: string;
}

function Layout({children, title}: ILayoutProps) {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/fetch">Fetch</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{title}</h1>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
}

export default Layout;

