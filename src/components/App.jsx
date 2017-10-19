import React from 'react';

const App = (props) => {
    const styleObj = {color: 'black'};

    if ('string' === typeof props.color) {
        styleObj.color = props.color;
    }

    return (
        <div>
            <h1 style={styleObj}>{props.heading}</h1>
        </div>
    );
};

export default App;