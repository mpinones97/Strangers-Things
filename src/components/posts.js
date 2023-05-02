import React , {useState} from 'react';
import {Link} from 'react-router-dom';

function Posts ({posts, token}) {
    const [search, setSearch] = useState('');
    const [filterPost, setFilterPost] = useState(posts);

    function handleSearch (ev) {
        const string = ev.target.value;
        setSearch(string);

        if (string.trim() !== ''){
            const filter = (
                posts.filter(
                    post => post.description.toLowerCase().includes(string.toLowerCase().trim()) || post.title.toLowerCase().includes(string.toLowerCase().trim())
                )
            )

            setFilterPost(filter);
        };
    };

    return (
        <>
            <div className = 'headers'> posts </div>

            <div>
                <label htmlFor = 'search'> search: </label>
                <input 
                    name = 'search'
                    type = 'text'
                    value = {search} 
                    onChange = {handleSearch}
                />  
            </div>

            <div>
                {filterPost.length ?
                    (filterPost.map((post, index) => ( 
                        <div className = 'postTiles' key = {post._id ?? index}>

                            <div> {post.title} </div>

                            <div> {post.description} </div>
        
                            {token ? <Link to = {`/posts/${post._id}`} className = 'links'> more details </Link> :  <></>}

                        </div>
                    )))
                : <div> no post found </div>}
            </div>
        </>
    );
};

export default Posts;