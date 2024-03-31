import { UserContext } from '../redux/context'
import React, { useContext } from 'react'
import styles from './ui.module.css'

const SortBtns = () => {
    const { users, sortAscending, sortDescending, resetAll } = useContext(UserContext)

    return (<div className={styles.sortContainer}>
        <button className={styles.sortBtn} onClick={sortAscending} >ASC</button>
        <button className={styles.sortBtn} onClick={sortDescending} >DESC</button>
        <button className={styles.sortBtn} onClick={() => resetAll(users)} >Reset All</button>
    </div>)
}

export default SortBtns