import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className='header'>
            <div className="header-main">
                <main>
                    <div className="header-title">
                        <span>Crypto</span> <br /> Online Price
                    </div>
                    <div className="header-btn">
                        <Link to="/market">Crypto List &#62;</Link>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Header;