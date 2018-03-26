import React, {Component} from 'react';
import Modal from './Modal';
import './Content.css';

export default class WebContent extends Component {

    render() {

        return (
            <div className="web-content">
                <h1>Full stack web developer specializing in JavaScript and PHP</h1>
                <p>
                    I build things on the web, usually with JavaScript, PHP, or both. I like solving tough problems, whether it's front-end or back-end, as long as it's interesting and worthwhile it'll probably hold my attention.
                    I'm a big fan of React, especially when it's the right tool for the job, I think PHP gets a bad wrap, and I'm a fervent Drupal 8 apologist. Last but not least, I'm a Developer at
                    <a href="https://www.chapterthree.com/">Chapter Three</a>, a full-service web agency in San Francisco.
                </p>

                <p>Check out some of my recent projects below:</p>
                <div className="gallery">
                    <Modal className="gallery-item"
                           thumbnail="./images/web/react-drupal.jpg"
                    >
                        <p>
                            An enterprise client decided to go in-house with their commenting system. A colleague and I built a custom solution using React and the Drupal 8 rest module. The system has been running smoothly
                            since launch on a site with thousands of logged in users. We recently contributed a version of the code back to the Drupal open-source community, which can be seen <a target="_blank" rel="noopener noreferrer" href="https://www.drupal.org/project/react_comments">here.</a>
                        </p>
                        </Modal>
                    <Modal className="gallery-item"
                           thumbnail="./images/web/la-loves-javascript.jpeg"
                    >
                        <p>
                            The Los Angeles Tourism board commissioned an interactive meme generator to promote the city of LA. Users can upload their own images, or choose from a number of default options, then provide
                            their own caption describing what "LA loves". Project uses html5 canvas and a Drupal 8 backend to provide downloadable images, social sharing, and an admin dashboard.
                        </p>
                    </Modal>
                    <Modal className="gallery-item"
                           thumbnail="./images/web/migration.jpeg"
                    >
                            Over the past year I've performed 2 ruby to Drupal 8 migrations, one Drupal 7 to Drupal 8 migration, one recurring upload using the Drupal 8 migrate module, and one XML to Drupal 8 migration.
                    </Modal>
                    <Modal className="gallery-item"
                           thumbnail="./images/web/wasc.png"
                    >
                            The Western Association of Schools and Colleges is an official academic body responsible for the accreditation of public and private universities, colleges, secondary and elementary schools in California.
                            If that sounds like a Wikipedia quote, it's because it is... you can't really put it more succinctly than that. I've worked with WASC for the past few years maintaining and adding features to their multiple web properties,
                            probably the most insteresting of which is a site used yearly to gather accreditation data from all of their institutions and export it to a managed backend service.
                    </Modal>
                    <Modal className="gallery-item"
                           thumbnail="./images/web/sfplanning.jpeg"
                    >
                            I was responsible for the new City of San Francisco Planning Department website build. It was built in Drupal 8 and should launch some time this Summer.
                    </Modal>
                    <Modal className="gallery-item"
                           thumbnail="./images/web/whatsgood.jpeg"
                    >
                            My pet project -- a website for rating food by dish as opposed to by restaurant. Built in Drupal 8, though most functionality is contained in custom services and frontend code. Please, feel free to sign up and
                            add content 😜 <a target="_blank" rel="noopener noreferrer" href="https://whatsgood.cc">https://whatsgood.cc</a>
                    </Modal>
                </div>

                <div className="content-footer">
                    <svg height='200' width='200'  fill="#000000" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><path d="M23.348,88.543c-1.111,0-2.046-0.758-2.323-1.783h4.646C25.394,87.785,24.459,88.543,23.348,88.543z M84.015,86.76  c0.294,0,0.583-0.039,0.864-0.109v9.441c0,0.994-0.813,1.805-1.806,1.805H16.927c-0.993,0-1.806-0.811-1.806-1.805V86.65  c0.282,0.07,0.57,0.109,0.865,0.109h4.111c0.294,1.527,1.639,2.686,3.25,2.686c1.612,0,2.956-1.158,3.25-2.686H84.015z   M77.434,91.051h-0.562v-0.609h-0.43v-0.455h-1.147v0.455h-0.431v0.609h-0.56v2.52h3.129V91.051z M86.234,83.148  c0.013,0.748-0.346,1.414-0.903,1.824c-0.072,0.053-0.148,0.102-0.226,0.145c-0.073,0.043-0.148,0.082-0.227,0.113  c-0.266,0.113-0.559,0.176-0.864,0.176H26.575h-0.933h-4.59H20.12h-4.134c-0.308,0-0.6-0.062-0.865-0.176  c-0.078-0.031-0.152-0.07-0.226-0.113c-0.079-0.043-0.154-0.092-0.227-0.145c-0.558-0.41-0.916-1.076-0.903-1.824L15.047,4.36  c0.021-1.241,1.053-2.257,2.294-2.257H82.66c1.241,0,2.273,1.016,2.293,2.257L86.234,83.148z M77.228,66.555H51.222  c-0.312,0-0.564,0.254-0.564,0.564v0.377c0,0.311,0.253,0.564,0.564,0.564h17.955c0.186,0,0.337,0.152,0.337,0.34v0.752  c0,0.311,0.253,0.564,0.565,0.564h7.148c0.312,0,0.564-0.254,0.564-0.564v-2.033C77.792,66.809,77.539,66.555,77.228,66.555z   M22.754,48.542c-0.021,1.686,1.34,3.099,3.025,3.14c0,0,7.422,0.553,24.221,0.553c16.798,0,24.221-0.553,24.221-0.553  c1.685-0.041,3.047-1.454,3.025-3.14l-0.404-31.698c-0.021-1.686-1.133-2.957-3.101-3.216c0,0-9.457-1.065-23.741-1.065  s-23.741,1.065-23.741,1.065c-1.968,0.259-3.079,1.53-3.102,3.216L22.754,48.542z M19.886,75.473c0,0.248,0.203,0.451,0.452,0.451  h3.913c0.248,0,0.451-0.203,0.451-0.451v-3.912c0-0.25-0.203-0.453-0.451-0.453h-3.913c-0.249,0-0.452,0.203-0.452,0.453V75.473z   M25.325,50.037h49.35c0.497,0,0.904-0.407,0.904-0.903V17.566c0-0.498-0.407-0.903-0.904-0.903h-49.35  c-0.497,0-0.903,0.406-0.903,0.903v31.567C24.422,49.63,24.828,50.037,25.325,50.037z"></path></svg>
                </div>
            </div>
        );
    }
};
