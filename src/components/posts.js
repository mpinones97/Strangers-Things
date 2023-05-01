import React, {useEffect, useState} from 'react';
import { fetchFromApi } from '../api';

function Posts () {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const data = await fetchFromApi({endpoint: 'posts'});
        
        if (data?.posts){
            setPosts(data.posts); 
        }
    }

    useEffect(() => {fetchPosts()}, []);

    return (
        <>
            <div className = 'headers'> posts </div>

            <div>
                {posts ? posts.map((post, index) => ( 
                    <div className = 'postTiles' key = {post._id ?? index}>
                        <div> {post.title} </div>

                        <div> {post.description} </div>

                        <div> Price: {post.price} </div>

                        <div> Seller: {post.author.username} </div>

                        <div> Location: {post.location} </div>
                    </div>
                )) : <div>no post found</div>}
            </div>
        </>
    );
};

export default Posts;