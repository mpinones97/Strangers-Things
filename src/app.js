import React from 'react';
import { Route, Link } from 'react-router-dom';
import {Posts} from './components';

function App (){
    return (
        <>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/posts'>Posts</Link>
                <Link to = '/profile'>Profile</Link>
                <Link to = '/profile/login'>Login</Link>
                <Link to = '/profile/register'>Register</Link>
            </nav>

            <Route exact path = '/'>
                <div className = 'headers' >welcome</div>
            </Route>

            <Route path = '/posts'>
                <Posts />
            </Route>

            <Route exact path = '/profile'>
                <div className = 'headers' >profile</div>
            </Route>

            <Route path = '/profile/login'>
                <div className = 'headers' >login</div>
            </Route>

            <Route path = '/profile/register'>
                <div className = 'headers' >register</div>
            </Route>
        </>
    )
};

export default App;