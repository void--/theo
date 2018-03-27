import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {animateScroll as scroll} from 'react-scroll';
import WebContent from './components/WebContent';
import DrumContent from './components/DrumContent';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const path = (/#(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) history.replace(path);

const App = () => {
    return (
        <Router>
            <Route path="/" component={Main}/>
        </Router>

    );
};

class Main extends Component {
    state = {
        animating: false
    };

    componentWillReceiveProps(nextProps) {
        scroll.scrollToTop({
            duration: 300,
        });

        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.setState({animating: true});
            setTimeout(() => {
                this.setState({animating: false});
            }, 300);
        }
    }

    render() {
        const redirect = sessionStorage.getItem('earlyClick');
        const path = this.props.location.pathname.slice(1);

        if (redirect) {
            sessionStorage.removeItem('earlyClick');
        }

        const animating = this.state.animating ? 'animating' : '';

        return (
            <div className={`container path--${this.props.location.pathname.slice(1)} ${animating}`}>
                {redirect && <Redirect to={`/${redirect}`} />}

                <Header path={path} />

                <article className="content">
                    <section className="web content__section">
                        <Web path={path}/>
                    </section>
                    <section className="drums content__section">
                        <Drums path={path} />
                    </section>
                </article>

                <Footer />
            </div>
        );
    }
}

class Web extends Component {
    state = {
        showLink: true
    };

    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setState({showLink: (nextProps.path !== 'web')});
        }, 300);
    }

    render() {
        const {showLink} = this.state;

        const figure = (
            <figure className="content__figure">

                <img className="content__image" src="./images/code.jpeg" alt="dumb stock photo of someone writing code"/>
                <figcaption className="content__caption">Web</figcaption>
            </figure>
        );

        return (
            <div>
                <Link to="/" className="mobile back-link">
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" fill="#fff"/></svg>
                    BACK
                </Link>
                {showLink ? <Link to="/web">{figure}</Link> : figure}

                <Route path="/web" component={WebContent} />
            </div>

        );
    }
}

class Drums extends Component {
    state = {
        showLink: true
    };

    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setState({showLink: (nextProps.path !== 'drums')});
        }, 300);
    }

    render() {
        const {showLink} = this.state;

        const figure = (
            <figure className="content__figure">
                <img className="content__image" src="./images/regency.jpg" alt="me drummin'"/>
                <figcaption className="content__caption">Drums</figcaption>
            </figure>
        );

        return (
            <div>
                <Link to="/" className="mobile back-link">
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" fill="#fff"/></svg>
                    BACK
                </Link>
                {showLink ? <Link to="/drums">{figure}</Link> : figure}

                <Route path="/drums" component={DrumContent} />
            </div>

        );
    }
}

export default App;
