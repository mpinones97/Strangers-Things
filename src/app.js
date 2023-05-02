import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import {UserProfile, Posts, UserForm, Home, PostPage} from './components';
import {fetchFromApi} from './api';

function App () {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const data = await fetchFromApi({path: 'posts'});
        
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

            <Route exact path = '/posts'>
                {posts ? 
                    <Posts posts = {posts} token = {token}/> 
                    : <div> no post to display</div>
                }
            </Route>

            <Route path = '/posts:postID'>
                <PostPage posts = {posts} token = {token}/>
            </Route>

            <Route exact path = '/profile'>
                <UserProfile token = {token} userData = {userData} posts = {posts} fetchPosts = {fetchPosts}/>
            </Route>

            <Route path = '/profile/:formResLogin'>
                <UserForm setToken = {setToken} setUserData = {setUserData}/>
            </Route>
        </>
    );
};

export default App;