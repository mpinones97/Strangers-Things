import React from 'react';
import {Link} from 'react-router-dom';

function Home ({token, setToken, setUserData}) {
    async function onLogout () {
        setToken(null);
        setUserData(null);
        history.push('/');
    };

    return (
        <>
            <div className = 'headers'> welcome </div>

            {token ?
                ( <>
                    <a href="/" onClick={onLogout}> Log Out </a>
                </> ) : <Link to = '/profile/login'> Login / Register </Link>
            }
        </>
    )   
};

export default Home;