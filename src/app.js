import React, {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import {UserProfile, Posts, UserForm, Home} from './components';

function App () {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        console.log('token from app: ' + token)
        console.log('userData from app: ' + userData)
    }, [token, userData]);


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
                <Posts/>
            </Route>

            <Route exact path = '/profile'>
                <UserProfile token = {token} userData = {userData}/>
            </Route>

            <Route path = '/profile/:formResLogin'>
                <UserForm setToken = {setToken} setUserData = {setUserData}/>
            </Route>
        </>
    )
};

export default App;