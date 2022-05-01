import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ refreshFeed }) => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = e => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])



    return (
        <nav className={scrolled ? 'sticky-nav' : null}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/market">Crypto</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {window.location.pathname === "/market" ? <div className="refresh" onClick={() => refreshFeed()}>
                <i className="fa-solid fa-arrow-rotate-right"></i>
            </div> : null}
        </nav>
    );
}

export default Nav;