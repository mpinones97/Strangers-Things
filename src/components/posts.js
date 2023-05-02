import React from 'react';
import {Link} from 'react-router-dom';

function Posts ({posts, token}) {

    return (
        <>
            <div className = 'headers'> posts </div>

            <div>
                {posts.map((post, index) => ( 
                    <div className = 'postTiles' key = {post._id ?? index}>
                        <div> {post.title} </div>

                        <div> {post.description} </div>
    
                        {token ? <Link to = {`/posts/${post._id}`}> more details </Link> :  <></>}

                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;