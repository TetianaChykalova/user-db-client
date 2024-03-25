import styles from './posts.module.css'

const PostSingle = ({postData}) => {
    const { title, body } = postData
    
    return (<div>
        <h4 className={styles.header}>{title}</h4>
        <p className={styles.text}>
            {body}
        </p>
    </div>)
}

export default PostSingle