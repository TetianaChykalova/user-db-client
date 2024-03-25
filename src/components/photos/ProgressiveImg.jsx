import styles from './photos.module.css'

const ProgressiveImg = ({placeholderSrc, photo}) => {
    return (<img
        {...{ src: placeholderSrc, ...photo }}
        alt={photo.title}
        src={photo.url}
        // placeholderSrc={photo.thumbnailUrl}
        className={styles.image}
      />)
}

export default ProgressiveImg