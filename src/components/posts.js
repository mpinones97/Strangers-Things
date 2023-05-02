import React from 'react';

function Posts ({posts}) {

    return (
        <>
            <div className = 'headers'> posts </div>

            <div>
                {posts.map((post, index) => ( 
                    <div className = 'postTiles' key = {post._id ?? index}>
                        <div> {post.title} </div>

                        <div> {post.description} </div>

                        <div> Price: {post.price} </div>

                        <div> Seller: {post.author.username} </div>

                        <div> Location: {post.location} </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;