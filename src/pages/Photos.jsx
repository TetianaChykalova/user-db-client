import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../redux/context';
import axios from 'axios';
import PhotosList from '../components/photos/PhotosList';
import Loading from '../ui/Loading';

const Photos = () => {
    const { userIdPath, albumId } = useParams();
    const { users, setUsers, photos, setPhotos, loading, apiRequestStart, apiRequestEnd, apiPhotos, setApiPhotos } = useContext(UserContext)

    useEffect(() => {
        const getPhotos = async () => {
          const url = `/users/${userIdPath}/albums/${albumId}/photos`
          if(apiPhotos !== url || photos.length === 0) {
            apiRequestStart()
            try {
              const response = await axios.get(url);
              setPhotos(response.data);
            } catch (error) {
              console.log(error);
              apiRequestEnd()
            }
            setApiPhotos(url)
          }
        };
    
        if (users.length === 0) {
          apiRequestStart()
          axios.get('/users')
            .then(response => {
              setUsers(response.data);
              getPhotos();
            })
            .catch(error => {
              console.log(error);
              apiRequestEnd()
            });
        } else {
            getPhotos();
        }
        // eslint-disable-next-line
      }, [userIdPath]);

    const userName = users ? users.find(user => +user.id === +userIdPath)?.name : ''

    return (<HelmetProvider>
      <Helmet>
          <title>User {userName} Photos</title>
          <meta name='description' content='User Photos List Description' />
      </Helmet>
      <div>
        {
          loading
          ? <Loading />
          : photos.length > 0 
            ? <PhotosList photos={photos} user={userName} />
            : (<p>Data not found</p>)
        }
      </div>
    </HelmetProvider>)
}

export default Photos