import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import MessageForm from './messageform';

function PostPage ({posts, token, userData, setUserData}) {
    if (token){
        const params = useParams();
        const {postID} = params;
        
        const post =  posts.find(post => (post._id == postID))
        const messageslist = userData.messages;
        console.log(messageslist)

        const messages = messageslist.filter(messages => (messages.post._id == postID))

        console.log(post)

        return(
            
            <>
                <div className = 'postTiles'>
                    <div> {post.title} </div>

                    <div> {post.description} </div>

                    <div> Price: {post.price} </div>

                    <div> Seller: {post.author.username} </div>
                                    
                    <div> Location: {post.location} </div>

                    {(post.author.username != userData.username) && <MessageForm postID = {postID} token = {token}  setUserData = {setUserData}/> }

                    {(messages.length > 0) ? messages.map((message, index) => 
                    (<div className = 'messageTiles' key = {message._id ?? index}>
                        {message.content}
                    </div>) 
                        ): (<></>)}
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