import styles from './photos.module.css'
import PhotoCard from './PhotoCard'

const PhotosList = ({photos, user}) => {

    return (<div>
        <h3 className={styles.header}>{user} photos</h3>
        <div className={styles.photos}>
            {photos.map(photo => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    </div>)
}

export default PhotosList