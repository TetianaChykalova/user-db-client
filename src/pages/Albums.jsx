import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../redux/context';
import axios from 'axios';
import AlbumsList from '../components/albums/AlbumsList';
import Loading from '../ui/Loading';

const Albums = () => {
    const { userIdPath } = useParams();
    const { users, setUsers } = useContext(UserContext)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const getAlbums = async () => {
          const url = `/users/${userIdPath}/albums`
            try {
              const response = await axios.get(url);
              setAlbums(response.data);
            } catch (error) {
              console.log(error);
            }
        };
    
        if (users.length === 0) {
          axios.get('/users')
            .then(response => {
              setUsers(response.data);
              getAlbums();
            })
            .catch(error => {
              console.log(error);
            });
        } else {
            getAlbums();
        }
        // eslint-disable-next-line
      }, [userIdPath]);

    const userName = users.find(user => +user.id === +userIdPath)?.name || ''
  

    return (<HelmetProvider>
      <Helmet>
          <title>User {userName} Albums</title>
          <meta name='description' content='User Albums List Description' />
      </Helmet>
      <div>
        {
          albums.length > 0
            ? <AlbumsList albums={albums} user={userName} />
            : <Loading />
        }
      </div>
    </HelmetProvider>)
}

export default Albums