export default () => {
    [
        '/images/web/react-drupal.jpg',
        '/images/web/la-loves-javascript.jpeg',
        '/images/web/migration.jpeg',
        '/images/web/wasc.png',
        '/images/web/sfplanning.jpeg',
        '/images/web/whatsgood.jpeg',
        '/images/drums/drums.jpg',
        '/images/drums/microphones.jpg',
        '/images/drums/mic.jpg',
        '/images/drums/opamp.jpg',
        '/images/drums/pres.jpg',
        '/images/drums/graveyard.jpg'
    ].forEach(function(el) {
        var img = new Image();
        img.src = el;
    });
};