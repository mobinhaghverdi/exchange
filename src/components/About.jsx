import React from 'react';
import Nav from "../common/Nav";
const About = () => {
    return (
        <div className='about-container'>
            <Nav />
            <div className="about">
                <div className="about-hyper">
                    Crypto Price App
                </div>
                <p>This Website Has Been Developed By <br /> Mobin Haghverdi <br />
                    With ❤️ And ☕</p>
                <a href="https://github.com/mobinhaghverdi">My Github <i className='fab fa-github'></i></a>
            </div>
        </div>
    );
}

export default About;