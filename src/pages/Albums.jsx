import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { UserContext } from '../redux/context';
import axios from 'axios';
import AlbumsList from '../components/albums/AlbumsList';
import Loading from '../ui/Loading';

const Albums = () => {
    const { userIdPath } = useParams();
    const { users, setUsers, albums, setAlbums, loading, apiRequestStart, apiRequestEnd, apiAlbums, setApiAlbums } = useContext(UserContext)

    useEffect(() => {
        const getAlbums = async () => {
          const url = `/users/${userIdPath}/albums`
          if(apiAlbums !== url || albums.length === 0) {
            apiRequestStart()
            try {
              const response = await axios.get(url);
              setAlbums(response.data);
            } catch (error) {
              console.log(error);
              apiRequestEnd()
            }
            setApiAlbums(url)
          }
        };
    
        if (users.length === 0) {
          apiRequestStart()
          axios.get('/users')
            .then(response => {
              setUsers(response.data);
              getAlbums();
            })
            .catch(error => {
              console.log(error);
              apiRequestEnd()
            });
        } else {
            getAlbums();
        }
        // eslint-disable-next-line
      }, [userIdPath]);

    const userName = users ? users.find(user => +user.id === +userIdPath)?.name : ''
  
    return (<HelmetProvider>
      <Helmet>
          <title>User {userName} Albums</title>
          <meta name='description' content='User Albums List Description' />
      </Helmet>
      <div>
        {
          loading 
            ? <Loading /> 
            : albums.length > 0
              ? <AlbumsList albums={albums} user={userName} />
              : (<>
                <p>Data not found</p>
            </>)
        }
      </div>
    </HelmetProvider>)
}

export default Albums