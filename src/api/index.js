const baseApiUrl = 'https://strangers-things.herokuapp.com/api/2301-FTB-PT-WEB-PT/';

const apiEndpoint = {
    register: '/users/register',
    login: '/users/login',
    myUser: '/users/me',
    posts: '/posts',
};

function getUrl (path) {
    if ( path == 'login'){
        path = 'users/login'
    }

    else if ( path == 'register'){
        path = 'users/register'
    } 

    else if (!path) {
        throw new Error ('Invalid API endpoint specified!?!?!')
    }

    return (baseApiUrl + path);
};

function getOptions (method, body , token) {
    const options = {
        method: method ? method.toUpperCase() : 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...( token && { 'Authorization': `Bearer ${token}` } ),
        },
        ...( body && { body: JSON.stringify(body) } ),
    };

    return options
};

export async function fetchFromApi ({path, method, body, token}) {
    try {
        const result = await fetch(getUrl(path), getOptions(method, body, token));
        const response = await result.json();

        return response?.data;
    }

    catch (error) {
        console.log(error);
    }
};