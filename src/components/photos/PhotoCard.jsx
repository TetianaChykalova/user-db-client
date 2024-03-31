import React from 'react';
import styles from './photos.module.css';
import ProgressiveImage from "react-progressive-graceful-image";

const PhotoCard = ({photo}) => {
    return (<div className={styles.card}>
        <ProgressiveImage
        src={photo.url}
        placeholder={photo.thumbnailUrl}
        delay={500}
        >
            {(src, loading) => (
            <img
                loading='lazy'
                style={{
                filter: loading ? "blur(5px)" : "blur(0)",
                transition: "filter 2s",
                }}
                src={src}
                alt={photo.title}
            />
            )}
        </ProgressiveImage>
        <h6 className={styles.header}>{photo.title}</h6>
    </div>)
}

export default PhotoCard