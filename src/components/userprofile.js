import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {AddPost} from '.'; 

function UserProfile ({token, userData}) {
    if (token){
        const username = userData.username;
        const posts = userData.posts;

        // const id = userData._id
        // const messages = userData.messages;

        return (
            <>
                <div className = 'headers'> you are login to {username}'s profile </div>
                <AddPost token = {token} userData = {userData}/>
                {(posts ? posts.map((post, index) => ( 
                    <>
                        <div className = 'postTiles' key = {post._id ?? index}>
                            <div> {post.title} </div>

                            <div> {post.description} </div>

                            <div> Price: {post.price} </div>

                            <div> Seller: {username} </div>

                            <div> Location: {post.location} </div>
                        </div>
                    </>
                )) : <div>no post found</div>)}
            </>
        );
    }

    else { 
        const  history = useHistory();
        history.push('/profile/login')
    }
};

export default UserProfile;