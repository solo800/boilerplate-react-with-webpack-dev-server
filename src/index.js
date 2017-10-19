import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
    <App
        heading="This is my heading as a prop"
        color="blue"
    />,
    document.getElementById('root')
);
