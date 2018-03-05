import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <header className="header">
        <Link className="back-link" to="/">Home</Link>
        <figure className="me">
            <Link to="/">
                <img className="me__image" src="./images/me.png" alt="it's me!"/>
            </Link>
            <figcaption className="me__caption">
                <p className="me__name">Theo Ballew</p>
                <a className="me__email" target="_blank" rel="noopener noreferrer" href="mailto:theoballew@gmail.com">theoballew@gmail.com</a>
            </figcaption>
        </figure>
    </header>
);