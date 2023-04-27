import React, {useState} from "react";
import { Link, useParams } from 'react-router-dom';
import {fetchFromApi} from "../api";

function UserForm ({setToken}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const params = useParams();
    const {formResLogin} = params;

    async function submit(ev) {
        ev.preventDefault();

        const body = {
            user: {
                username,
                password
            }
        };
            
        const data = await fetchFromApi({endpoint: formResLogin , method: 'post', body: body });
        setToken(data.token);
    };

    return (
        <>
            <div className = 'headers'> {formResLogin == 'register' ? 'register' : 'login'} </div>

            <form onSubmit={submit}>
                <div>
                    <label htmlFor = 'username'> Username: </label>
                    
                    <input 
                        name = 'username'
                        type = 'text'
                        value = {username} 
                        onChange={ ev => setUsername(ev.target.value) }
                    />
                </div>
                
                <div>
                    <label htmlFor = 'password'> Password: </label>
                    
                    <input 
                        name = 'password'
                        type = 'password'
                        value = {password} 
                        onChange={ ev => setPassword(ev.target.value) }
                    />
                </div>

                <button type = 'submit'> {formResLogin == 'register' ? 'register' : 'login'} </button>
                {formResLogin == 'register' ?
                    <Link to = '/profile/login'>Login</Link> :
                    <Link to = '/profile/register'>Register</Link>
                }
            </form>
        </>
    );
};

export default UserForm;