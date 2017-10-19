import React from 'react';
import Paragraph from '../Paragraph/Paragraph.jsx';
import styles from './app.scss';

export default class App extends React.Component {
    constructor (props) {
        super(props);

        const now = new Date();

        this.state = {
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        };
    }
    updateTime () {
        console.log('calling update time');
        const now = new Date();
        this.setState({
            time: `${now.getHours()}:${now.getMinutes()}`
        });
    }
    render () {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Hello my friends!</h1>
                <Paragraph text={this.state.time} updateTime={this.updateTime}/>
            </div>
        );
    }
}