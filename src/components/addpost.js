import React, {useState} from 'react';
import {fetchFromApi} from '../api';

function AddPost ({token}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    async function add (ev) {
        ev.preventDefault();

        const body = {
            post: {
                title,
                description,
                price
            }
        };

        const data = await fetchFromApi({endpoint: 'posts', method: 'post', body: body, token});

        console.log(data)

        if (data.post){
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
        }
    };

    return (
        <>
            <div className = 'headers'> Add a post </div>
            
            <form onSubmit = {add}>
                <div>
                    <label htmlFor = 'title'> Title: </label>
                        
                    <input 
                        name = 'title'
                        type = 'text'
                        value = {title} 
                        onChange = {ev => setTitle(ev.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor = 'description'> Description: </label>
                        
                    <input 
                        name = 'description'
                        type = 'text'
                        value = {description} 
                        onChange = {ev => setDescription(ev.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor = 'price'> Price: </label>
                        
                    <input 
                        name = 'price'
                        type = 'text'
                        value = {price} 
                        onChange = {ev => setPrice(ev.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor = 'location'> location: </label>
                        
                    <input 
                        name = 'location'
                        type = 'text'
                        value = {location} 
                        onChange = {ev => setLocation(ev.target.value)}
                    />
                </div>

                <button type = 'submit'> Submit </button>

            </form>

            <br></br>
        </>
    )

};

export default AddPost;