import React from 'react'
import AlbumSingle from './AlbumSingle'
import styles from './albums.module.css'

const AlbumsList = ({albums, user}) => {

    return (<>
        <h2 className={styles.header}>{user} albums</h2>
        <div className={styles.albums}>
            {albums.map(album => (
                <AlbumSingle key={album.id} {...album} />
            ))}
        </div>
    </>)
}

export default AlbumsList