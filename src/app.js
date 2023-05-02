import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import {UserProfile, Posts, UserForm, Home} from './components';
import {fetchFromApi} from './api';

function App () {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const data = await fetchFromApi({endpoint: 'posts'});
        
        if (data?.posts){
            setPosts(data.posts); 
        }
    }

    useEffect(() => {fetchPosts()}, []);


    return (
        <>
            <nav>
                <Link to = '/'> Home </Link>
                <Link to = '/posts'> Posts </Link>
                {token &&
                    ( <>
                        <Link to="/profile">My Profile</Link>
                    </> )
                }
            </nav>

            <Route exact path = '/'>
                <Home token = {token} setToken = {setToken} setUserData = {setUserData}/>
            </Route>

            <Route path = '/posts'>
                {posts ? 
                    <Posts posts = {posts}/> 
                    : <div> no post to display</div>
                }
            </Route>

            <Route exact path = '/profile'>
                <UserProfile token = {token} userData = {userData}  fetchPosts = {fetchPosts}/>
            </Route>

            <Route path = '/profile/:formResLogin'>
                <UserForm setToken = {setToken} setUserData = {setUserData}/>
            </Route>
        </>
    )
};

export default App;