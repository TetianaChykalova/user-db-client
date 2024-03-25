import React from 'react'
import PostSingle from './PostSingle'
import styles from './posts.module.css'

const PostsList = ({posts, user}) => {

    return (<>
        <h2 className={styles.header}>{user} posts</h2>
        <div className={styles.posts}>
            {posts.map(post => (
                <PostSingle key={post.id} postData={post} />
            ))}
        </div>
    </>)
}

export default PostsList