import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './app';

const rootElm = document.getElementById('app');
const root = ReactDOMClient.createRoot(rootElm);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);