import React from 'react';
import Nav from "../common/Nav";
const About = () => {
    return (
        <div className='about-container'>
            <Nav />
            <div className="about">
                <div className="about-hyper">
                    Crypto Price
                </div>
                <p>This Website Has Been Developed By <br /> Mobin Haghverdi <br />
                    Front End Developer...</p>
            </div>
        </div>
    );
}

export default About;