import UserSingle from './UserSingle'
import styles from './users.module.css'

const UsersList = ({users}) => {

    return (<div className={styles.users}>
        {users.map(user => (
            <UserSingle key={user.id} userData={user} />
        ))}
    </div>)
}

export default UsersList