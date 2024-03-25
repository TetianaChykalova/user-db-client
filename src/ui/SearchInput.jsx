import { useState, useContext } from "react"
import { UserContext } from "../redux/context"
import { UilSearch } from '@iconscout/react-unicons'
import styles from './ui.module.css'

const SearchInput = () => {
    const [searchVal, setSearchVal] = useState('')
    const { searchUsers, resetAll, users } = useContext(UserContext)

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleClick()
        }
    }

    const handleClick = () => {
        searchVal.length > 0 
            ? searchUsers(searchVal)
            : resetAll(users)
    }

    return(<div className={styles.search}>
        <input 
            type="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={handleKey}
            placeholder="search"
            className={styles.input}
        />
        <button className={styles.searchBtn}
            onClick={handleClick}
        >
            <UilSearch/>
        </button>
    </div>)
}

export default SearchInput