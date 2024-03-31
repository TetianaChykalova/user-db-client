import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import UsersList from '../components/users/UsersList'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { UserContext } from '../redux/context'
import SearchInput from '../ui/SearchInput'
import SortBtns from '../ui/SortBtns'
import Loading from '../ui/Loading'

const Home = () => {

    const { filteredUsers, setUsers, loading, apiRequestStart, apiRequestEnd, apiUsers, setApiUsers } = useContext(UserContext)

    useEffect(() => {
      const url = '/users'
      if (apiUsers !== url && filteredUsers.length === 0) {
        apiRequestStart()
        axios.get(url)
        .then(response => setUsers(response.data))
        .catch(error => {
          console.log(error);
          apiRequestEnd();
        });
        setApiUsers(url)
      }
      // eslint-disable-next-line
    }, [])

    return (<HelmetProvider>
      <Helmet>
          <title>User list</title>
          <meta name='description' content='User List Description' />
      </Helmet>
      <div>
        {
          loading 
            ? <Loading />
            : filteredUsers.length === 0
              ? (<>
                  <div className='headerContent'>
                    <SearchInput />
                    <SortBtns />
                  </div>
                  <p>Data not found</p>
              </>)
              : (<>
                  <div className='headerContent'>
                    <SearchInput />
                    <SortBtns />
                  </div>
                  <UsersList users={filteredUsers} />
              </>)
        }
      </div>
    </HelmetProvider>)
}

export default Home