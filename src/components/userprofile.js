import React from 'react';
import {useHistory} from 'react-router-dom';
import {AddPost} from '.'; 
import {fetchFromApi} from '../api';


function UserProfile ({token, userData, posts, fetchPosts}) {
    console.log(posts)
    if (token){
        const username = userData.username;

        return (
            <>
                <div className = 'headers'> you are login to {username}'s profile </div>

                <AddPost token = {token} fetchPosts = {fetchPosts}/>

                {(posts ? posts.map((post, index) =>
                    ((post.author.username == username) ? (

                            <div className = 'postTiles' key = {post._id ?? index}>
                                <div> {post.title} </div>

                                <div> {post.description} </div>

                                <div> Price: {post.price} </div>

                                <div> Location: {post.location} </div>

                                <br></br>

                                {post.message > 0 ? <div className = 'messageTiles'></div> : <></>}
                                
                                <br></br>
                                
                                <button onClick = {async () => {
                                    await fetchFromApi({path: `posts/${post._id}`, method: 'delete', token});
                                    await fetchPosts();
                                }}> delete </button>
                            </div>
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