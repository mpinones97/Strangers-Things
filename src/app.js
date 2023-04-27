import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import {Posts, UserForm} from './components';

function App (){
    const [token, setToken] = useState(null);

    return (
        <>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/posts'>Posts</Link>
                <Link to = '/profile'>Profile</Link>
                <Link to = '/profile/login'>Login</Link>
            </nav>

            <Route exact path = '/'>
                <div className = 'headers' >welcome</div>
            </Route>

            <Route path = '/posts'>
                <Posts/>
            </Route>

            <Route exact path = '/profile'>
                <div className = 'headers' >profile</div>
            </Route>

            <Route path = '/profile/:formResLogin' token = {setToken}>
                <UserForm setToken = {setToken}/>
            </Route>
        </>
    )
};

export default App;