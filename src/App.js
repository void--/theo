import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {animateScroll as scroll} from 'react-scroll';
import WebContent from './components/WebContent';
import DrumContent from './components/DrumContent';

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
        var redirect = sessionStorage.getItem('earlyClick');

        if (redirect) {
            sessionStorage.removeItem('earlyClick');
        }

        const animating = this.state.animating ? 'animating' : '';

        return (
            <div className={`container path--${this.props.location.pathname.slice(1)} ${animating}`}>
                {redirect && <Redirect to={`/${redirect}`} />}

                <Header />

                <article className="content">
                    <section className="web content__section">
                        <Web path={this.props.location.pathname.slice(1)}/>
                    </section>
                    <section className="drums content__section">
                        <Drums path={this.props.location.pathname.slice(1)} />
                    </section>
                </article>

                <Footer />
            </div>
        );
    }
}

const Web = ({ path }) => {
    const showLink = (path !== 'web');

    console.log(showLink);

    const figure = (
        <figure className="content__figure">
            <img className="content__image" src="./images/code.jpeg" alt="dumb stock photo of someone writing code "/>
            <figcaption className="content__caption">Web</figcaption>
        </figure>
    );

    return (
        <div>
            {showLink ? <Link to="/web">{figure}</Link> : figure }

            <Route path="/web" component={WebContent} />
        </div>

    );
};

const Drums = ({ path }) => {
    const showLink = (path !== 'drums');

    const figure = (
        <figure className="content__figure">
            <img className="content__image" src="./images/drums.jpg" alt="me drummin'"/>
            <figcaption className="content__caption">Drums</figcaption>
        </figure>
    );
    return (
        <div>
            {showLink ? <Link to="/drums">{figure}</Link> : figure }

            <Route path="/drums" component={DrumContent} />

        </div>
    );
};

export default App;
