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
                <div style={styles.galleryItem}>
                    <img src="./images/drums/drums.jpg" alt=""/>
                </div>
                <div style={styles.galleryItem}>
                    <img src="./images/drums/mic.jpg" alt=""/>
                </div>
                <div style={styles.galleryItem}>
                    <img src="./images/drums/microphones.jpg" alt=""/>
                </div>
                <div style={styles.galleryItem}>
                    <img src="./images/drums/opamp.jpg" alt=""/>
                </div>
                <div style={styles.galleryItem}>
                    <img src="./images/drums/pres.jpg" alt=""/>
                </div>
                <div style={styles.galleryItem}>
                    <img src="./images/drums/graveyard.jpg" alt=""/>
                </div>
            </div>
            
            <div className="content-footer">
                <svg height='200' width='200' fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 98.836 87.947"><path d="M10.534,84.985V67.824C4.024,67.351,0,66.048,0,64.747l0.828-24.028c0-1.42,8.167-2.13,9.706-2.13V12.192
  C4.498,8.641,0.355,4.261,0.355,1.894C0.355,0.474,1.657,0,3.433,0c2.958,0,8.285,1.539,13.493,4.499
  c6.865,3.906,11.6,8.167,11.6,11.363c-0.473,1.539-1.775,2.012-3.195,2.012c-2.604,0-6.51-1.302-10.535-3.314v24.029h2.367
  l2.959,0.473c-0.592-0.592-1.065-1.539-1.065-2.13l1.894-14.796c0.355-2.841,6.037-3.669,9.232-3.669
  c4.734,0,9.706,1.302,12.666,3.433c1.539,0.828,2.13,1.894,2.13,2.959l-1.42,13.139h2.486c-0.119-0.474-0.119-1.065-0.119-1.539
  l-0.947-9.232c0-4.261,5.564-7.221,11.363-7.221c4.379,0,8.996,1.42,9.707,4.498c0.236,0.829,0.236,1.657,0.236,2.367
  c0,0.829,0,1.42,0.236,2.13l2.723-0.71V15.506c-7.457-0.237-13.256-1.303-13.256-3.077c0-1.421,5.799-2.723,13.256-2.96V8.167h4.262
  v1.302c7.338,0.237,12.9,1.539,12.9,2.96c0,1.538-5.562,2.84-12.9,3.077v11.718l5.443-0.592V16.571h4.262v9.825
  c5.801,0.473,13.021,2.367,15.033,2.84l0.592,0.119c-3.434,0.947-9.824,2.486-15.625,3.314V84.75h-4.262V32.669
  c-1.775,0-3.668-0.473-5.443-0.71v4.972c2.367,0.355,3.904,0.828,3.904,1.657c0,3.077,0.238,6.036,0.475,8.876
  c-0.711,1.186-2.012,1.658-4.379,2.368v36.575h-4.262l-6.865-5.326c-4.498,4.261-10.535,6.865-17.163,6.865
  c-6.392,0-12.191-2.369-16.69-6.154l-7.575,5.09l-2.367-3.434l7.102-4.734c-2.486-3.197-4.261-6.865-5.09-10.654h-5.799v16.926
  H10.534L10.534,84.985z M65.338,63.091c0-12.074-7.695-20.125-20.122-20.125c-11.6,0-20.123,9.114-20.123,20.715
  c0,10.534,8.996,19.293,20.123,19.293C56.342,82.974,65.338,73.979,65.338,63.091L65.338,63.091z M65.219,77.885l4.025,3.196v-11.6
  C68.414,72.56,67.113,75.282,65.219,77.885L65.219,77.885z M69.244,36.457v-5.326l-2.723-0.711c0.354,4.38,0.354,4.735,0.592,4.735
  c0,0.474,0,0.947-0.236,1.064C67.705,36.22,68.414,36.457,69.244,36.457L69.244,36.457z M66.877,50.661
  c1.064,1.896,1.775,3.788,2.367,6.037v-6.273C68.414,50.661,67.705,50.661,66.877,50.661L66.877,50.661z M27.698,45.097l2.249-2.012
  l-2.131-0.355C27.815,43.559,27.698,44.151,27.698,45.097z"></path></svg>
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
        width: "33.3333333333%",
        height: "33.3333333333%",
        background: "radial-gradient(circle at 0% 0%,#816BF9,#000)",
    }
};