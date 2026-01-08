import './header.css';
import { Link } from 'react-router';    

export default function Header() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>hello world</h1>
            </div>
            <ul className="nav-links pe-5">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
}