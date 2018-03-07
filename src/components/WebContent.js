import React from 'react';
import './Content.css';

export default () => {
    return (
        <div className="web-content">
            <h1>Full stack web developer specializing in JavaScript and PHP</h1>
            <p>
            </p>

            <h3>Some recent projects:</h3>
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