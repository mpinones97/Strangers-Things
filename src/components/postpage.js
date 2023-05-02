import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

function PostPage ({posts, token}) {
    if (token){
        const params = useParams();
        const {postID} = params;
        
        const post =  posts.find(post => (`:${post._id}` == postID))

        return(
            
            <>
                <div className = 'postTiles'>
                    <div> {post.title} </div>

                    <div> {post.description} </div>

                    <div> Price: {post.price} </div>

                    <div> Seller: {post.author.username} </div>
                                    
                    <div> Location: {post.location} </div>
                </div>
            </>
        );
    }

    else { 
        const  history = useHistory();
        history.push('/posts')
    }
};

export default PostPage;