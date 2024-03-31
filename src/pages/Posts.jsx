import { Helmet, HelmetProvider } from 'react-helmet-async';
import PostsList from '../components/posts/PostsList'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../redux/context';
import axios from 'axios';
import Loading from '../ui/Loading';

const Posts = () => {
    const { userIdPath } = useParams();
    const { users, setUsers, posts, setPosts, loading, apiRequestStart, apiRequestEnd, apiPosts, setApiPosts } = useContext(UserContext)

    useEffect(() => {
        const getPosts = async () => {
          const url = `/users/${userIdPath}/posts`
          if(apiPosts !== url || posts.length === 0) {
            apiRequestStart()
            try {
              const response = await axios.get(url);
              setPosts(response.data);
            } catch (error) {
              apiRequestEnd()
              console.log(error);
            }
            setApiPosts(url)
          }
      };
  
      if (users.length === 0) {
        apiRequestStart()
        axios.get('/users')
          .then(response => {
            setUsers(response.data);
            getPosts();
          })
          .catch(error => {
            console.log(error);
            apiRequestEnd()
          });
      } else {
        getPosts();
      }
      // eslint-disable-next-line
    }, [userIdPath]);

    const userName = users ? users.find(user => +user.id === +userIdPath)?.name : ''
  

    return (<HelmetProvider>
      <Helmet>
          <title>User {userName} Posts</title>
          <meta name='description' content='User Posts List Description' />
      </Helmet>
      <div>
        {
          loading
          ? <Loading />
          : posts.length > 0 
            ? <PostsList posts={posts} user={userName} />
            : (<p>Data not found</p>)
        }
      </div>
    </HelmetProvider>)
}

export default Posts