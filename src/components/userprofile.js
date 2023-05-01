import React from 'react';

function UserProfile ({token, userData}) {
    const username = userData.username;
    const id = userData._id;
    const posts = userData.posts;
    const messages = userData.messages;

    console.log('username: ' + username);
    console.log('id: ' + id);
    console.log('posts: ' + posts);
    console.log('messages: ' + messages);

    return (
        <>
            <div className = 'headers'> you are login to {username}'s profile </div>
        </>
    );
};

export default UserProfile;