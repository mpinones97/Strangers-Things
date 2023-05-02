import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {AddPost} from '.'; 


function UserProfile ({token, userData, posts, fetchPosts}) {
    if (token){
        const username = userData.username;
        console.log(userData)

        return (
            <>
                <div className = 'headers'> you are login to {username}'s profile </div>

                <AddPost token = {token} fetchPosts = {fetchPosts}/>

                {(posts ? posts.map((post, index) =>
                    ((post.author.username == username) ? (
                        <>
                            <div className = 'postTiles' key = {post._id ?? index}>
                                <div> {post.title} </div>

                                <div> {post.description} </div>

                                <div> Price: {post.price} </div>

                                <div> Location: {post.location} </div>
                            </div>
                        </>
                    ) : <></>)
                ) : <div>no post found</div>)}
            </>
        );
    }

    else { 
        const  history = useHistory();
        history.push('/profile/login')
    }
};

export default UserProfile;