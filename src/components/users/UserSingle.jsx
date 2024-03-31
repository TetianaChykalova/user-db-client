import React from 'react';
import { Link } from 'react-router-dom';
import styles from './users.module.css';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilGlobe } from '@iconscout/react-unicons';

const UserSingle = ({userData}) => {
    const {id, name, email, website} = userData
    
    return (<div className={styles.container}>
        <h5>{name}</h5>
        <div className={styles.content}>
            <Link to={`${id}/posts`}>See posts</Link>
            <Link to={`${id}/albums`}>See albums</Link>
        </div>
        <div className={styles.content}>
            <span className={styles.contact}><UilEnvelope /> 
                <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className={styles.contact}><UilGlobe />
                <a target='_blanc' href={`https://${website}`}>{website}</a>
            </span>
        </div>
    </div>)
}

export default UserSingle