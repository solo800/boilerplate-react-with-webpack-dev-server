import React from 'react';
import Paragraph from '../paragraph/Paragraph.jsx';
import styles from './app.scss';

export default class App extends React.Component {
    constructor (props) {
        const now = new Date();

        super(props);
        this.state = {
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        };
    }

    clickHandler () {
        const now = new Date();
        this.setState({
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
        });
    }

    render () {
        return (
            <div>
                <h1 className={styles.text}>Hello my friends!</h1>
                <Paragraph
                    text='The current time is' time={this.state.time}
                    updateTime={this.clickHandler.bind(this)}
                />
            </div>
        );
    }
}
// const App = (props) => {
//     const styleObj = {color: 'black'};
//
//     if ('string' === typeof props.color) {
//         styleObj.color = props.color;
//     }
//
//     return (
//         <div>
//             <h1 style={styleObj}>{props.heading}</h1>
//         </div>
//     );
// };
//
// export default App;