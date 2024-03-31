import React from 'react';
import { Link } from "react-router-dom";
import styles from './albums.module.css';

const AlbumSingle = (props) => {
    const {userId, id, title} = props

    return (<div className={styles.album}>
        <h3 className={styles.title}>{title}</h3>
        <Link to={`/users/${userId}/albums/${id}/photos`} className={styles.header}>See more</Link>
    </div>)
}

export default AlbumSingle