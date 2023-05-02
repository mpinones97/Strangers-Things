import React, {useState} from 'react';
import {fetchFromApi} from '../api';

function MessageForm ({postID, token, setUserData}) {
    const [ message , setMessage ] = useState('');

    const body = {
        message : {
            content: message 
        }
    };
    
    async function submit(ev) {
        ev.preventDefault();

        await fetchFromApi({path: `posts/${postID}/messages` , method: 'post', token, body: body });
        const user = await fetchFromApi({path: 'users/me', token: token});
        if (user){
            setUserData(user);
        }
        
        
        setMessage('');
    };

    return (

        <>
            <form onSubmit={submit}>
                <br></br>
                <div>
                    <label htmlFor = 'message'> message: </label>
                    
                    <input 
                        name = 'message'
                        type = 'text'
                        value = {message} 
                        onChange = {ev => setMessage(ev.target.value)}
                    />
                    <button type = 'submit'> add message</button>
                </div>
                
                
            </form>
        </>
    );
};

export default MessageForm;