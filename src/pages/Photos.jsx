import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../redux/context';
import axios from 'axios';
import PhotosList from '../components/photos/PhotosList';
import Loading from '../ui/Loading';

const Photos = () => {
    const { userIdPath, albumId } = useParams();
    const { users, setUsers } = useContext(UserContext)
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const getPhotos = async () => {
          const url = `/users/${userIdPath}/albums/${albumId}/photos`
            try {
              const response = await axios.get(url);
              setPhotos(response.data);
            } catch (error) {
              console.log(error);
            }
        };
    
        if (users.length === 0) {
          axios.get('/users')
            .then(response => {
              setUsers(response.data);
              getPhotos();
            })
            .catch(error => {
              console.log(error);
            });
        } else {
            getPhotos();
        }
        // eslint-disable-next-line
      }, [userIdPath]);

    const userName = users.find(user => +user.id === +userIdPath)?.name || ''

    return (<HelmetProvider>
      <Helmet>
          <title>User {userName} Photos</title>
          <meta name='description' content='User Photos List Description' />
      </Helmet>
      <div>
        {
          photos.length > 0 
            ? <PhotosList photos={photos} user={userName} />
            : <Loading />
        }
      </div>
    </HelmetProvider>)
}

export default Photos