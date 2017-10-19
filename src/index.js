import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';

ReactDOM.render(
    <App
        heading="This is my heading as a prop"
        color="blue"
    />,
    document.getElementById('root')
);
