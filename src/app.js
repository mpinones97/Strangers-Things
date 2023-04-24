import React from 'react';
import { Route, Link } from 'react-router-dom';

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
                <div class = 'headers'>welcome</div>
            </Route>

            <Route path = '/posts'>
                <div class = 'headers'>posts</div>
            </Route>

            <Route exact path = '/profile'>
                <div class = 'headers'>profile</div>
            </Route>

            <Route path = '/profile/login'>
                <div class = 'headers'>login</div>
            </Route>

            <Route path = '/profile/register'>
                <div class = 'headers'>register</div>
            </Route>
        </>
    )
};

export default App;