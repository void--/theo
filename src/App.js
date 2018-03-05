import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {animateScroll as scroll} from 'react-scroll';

const App = (props) => {
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
                        <Web />
                    </section>
                    <section className="drums content__section">
                        <Drums />
                    </section>
                </article>

                <Footer />
            </div>
        );
    }
}

const Web = () => {
    return (
        <div>
            <Link to="/web">
                <figure className="content__figure">
                    <img className="content__image" src="./images/code.jpeg" alt="dumb stock photo of someone writing code "/>
                    <figcaption className="content__caption">Web</figcaption>
                </figure>
            </Link>

            <Route path="/web" component={WebContent} />
        </div>

    );
};

const WebContent = () => {
    return (
        <div className="web-content">
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </p><p>            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </p><p>            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
    );
};

const Drums = () => {
    return (
        <div>
            <Link to="/drums">
                <figure className="content__figure">
                    <img className="content__image" src="./images/drums.jpg" alt="me drummin'"/>
                    <figcaption className="content__caption">Drums</figcaption>
                </figure>
            </Link>

            <Route path="/drums" component={DrumContent} />

        </div>
    );
};

const DrumContent = () => {
    return (
        <div className="drum-content">
            <h1>Tum Torquatus: Prorsus, inquit, assentior;</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. <i>Negat enim summo bono afferre incrementum diem.</i> Quia dolori non voluptas contraria est, sed doloris privatio. At enim, qua in vita est aliquid mali, ea beata esse non potest. Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Heri, inquam, ludis commissis ex urbe profectus veni ad vesperum. </p>

            <p>Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; <mark>Recte dicis;</mark> Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. An tu me de L. <i>Tu vero, inquam, ducas licet, si sequetur;</i> Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; <i>Cur post Tarentum ad Archytam?</i> Tu vero, inquam, ducas licet, si sequetur; Paria sunt igitur. Nihil enim hoc differt. </p>

            <h2>Non enim ipsa genuit hominem, sed accepit a natura inchoatum.</h2>

            <p>In qua si nihil est praeter rationem, sit in una virtute finis bonorum; <b>Hoc tu nunc in illo probas.</b> Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Est, ut dicis, inquit; Quod quidem iam fit etiam in Academia. </p>

            <p>Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Nam memini etiam quae nolo, oblivisci non possum quae volo. Non est igitur summum malum dolor. <a href="http://loripsum.net/" target="_blank">Aperiendum est igitur, quid sit voluptas;</a> Si quae forte-possumus. Sed quot homines, tot sententiae; Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant. </p>

            <p>Tecum optime, deinde etiam cum mediocri amico. Beatus sibi videtur esse moriens. <b>Quasi ego id curem, quid ille aiat aut neget.</b> Eam stabilem appellas. Quod vestri non item. Qui ita affectus, beatum esse numquam probabis; Quamquam tu hanc copiosiorem etiam soles dicere. Cur iustitia laudatur? <i>Cur post Tarentum ad Archytam?</i> An eiusdem modi? </p>

            <p>Si enim ad populum me vocas, eum. Non est ista, inquam, Piso, magna dissensio. <a href="http://loripsum.net/" target="_blank">Si longus, levis.</a> <i>Erat enim Polemonis.</i> Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. </p>

        </div>
    );
};

export default App;
