import React from 'react';
import './Content.css';

export default () => {
    return (
        <div className="drum-content">
            <h1>Online session drum tracks, samples, and loops</h1>
            <p>
                I play drums on stuff. If you have a project that needs drums, shoot me an email at <a target="_blank" rel="noopener noreferrer" href="mailto:theoballew@gmail.com">theoballew@gmail.com</a>, I take projects of all sizes -- whether you need a full album of multi-tracked drums, or just a few custom samples to give your track an edge -- I'm your guy.
            </p>
            <p>
                I use an array of vintage and custom recording equipment, some of my favorites for recording drums include:
            </p>
            <ul>
                <li>Vintage AKG 451 eb pencil condensers</li>
                <li>Peluso 2247 SE large diaphragm tube condenser</li>
                <li>Shure KSM 32</li>
                <li>Vintage(ish) AKG 414 B-ULS</li>
                <li>Classic Audio Products of Illinois vintage API clones: both the 312 and vp28</li>
                <li>High end dynamic mics - Beyer m88, EV RE20, Shure SM7b, etc.</li>
            </ul>

            <p>
                Check back soon for video samples, in the mean time you'll have to make due with some gear porn:
            </p>

            <div style={styles.gallery}>
                <div style={styles.galleryItem}></div>
                <div style={styles.galleryItem}></div>
                <div style={styles.galleryItem}></div>
                <div style={styles.galleryItem}></div>
                <div style={styles.galleryItem}></div>
                <div style={styles.galleryItem}></div>
            </div>
        </div>
    );
};

const styles = {
    gallery: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 25
    },
    galleryItem: {
        minWidth: "calc(33.3333333333%)",
        height: "200px",
        background: "red",
    }
};