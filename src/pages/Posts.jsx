import { Helmet, HelmetProvider } from 'react-helmet-async';
import PostsList from '../components/posts/PostsList'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../redux/context';
import axios from 'axios';
import Loading from '../ui/Loading';

const Posts = () => {
    const { userIdPath } = useParams();
    const { users, setUsers } = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
          const url = `/users/${userIdPath}/posts`
            try {
              const response = await axios.get(url);
              setPosts(response.data);
            } catch (error) {
              console.log(error);
            }
      };
  
      if (users.length === 0) {
        axios.get('/users')
          .then(response => {
            setUsers(response.data);
            getPosts();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        getPosts();
      }
      // eslint-disable-next-line
    }, [userIdPath]);

    const userName = users.find(user => +user.id === +userIdPath)?.name || ''
  

    return (<HelmetProvider>
      <Helmet>
          <title>User {userName} Posts</title>
          <meta name='description' content='User Posts List Description' />
      </Helmet>
      <div>
        {
          posts.length > 0 
            ? <PostsList posts={posts} user={userName} />
            : <Loading />
        }
      </div>
    </HelmetProvider>)
}

export default Posts