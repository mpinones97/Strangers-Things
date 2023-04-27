const baseApiUrl = 'https://strangers-things.herokuapp.com/api/2301-FTB-PT-WEB-PT';

const apiEndpoint = {
    register: '/users/register',
    login: '/users/login',
    myAccount: '/users/me',
    allPosts: '/posts',
    onePost: '/posts/POST_ID',
    message: '/posts/POST_ID/messages'
};

function getUrl (endpoint) {
    const path = apiEndpoint[endpoint];

    if (!path) {
        throw new Error ('Invalid API endpoint specified!?!?!')
    }

    return (baseApiUrl + path);
};

function getOptions (method, body) {
    const options = {
        method: method ? method.toUpperCase() : 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        ...( body && { body: JSON.stringify(body) } )
       
    };

    return options
};

export async function fetchFromApi ({endpoint, method, body}) {
    try {
        const result = await fetch(getUrl(endpoint), getOptions(method, body));
        const response = await result.json();

        return response?.data;
    }

    catch (error) {
        console.log(error);
    }
};