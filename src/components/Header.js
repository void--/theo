import React from 'react';
import {Link} from 'react-router-dom';

export default ({path}) => {
    const showLink = path;
    const image = <img className="me__image" src="./images/me.png" alt="it's me!"/>;

    const content = (
        <figure className="me">
            {showLink ? <Link to="/">{image}</Link> : image}
            <figcaption className="me__caption">
                <p className="me__name">Theo Ballew</p>
                <a className="me__email" target="_blank" rel="noopener noreferrer" href="mailto:theoballew@gmail.com">theoballew@gmail.com</a>
            </figcaption>
        </figure>
    );

    return (
        <header className="header">
            {showLink ? <Link className="back-link" to="/">Home</Link> : <span className="back-link"></span>}
            {content}
        </header>
    );
};