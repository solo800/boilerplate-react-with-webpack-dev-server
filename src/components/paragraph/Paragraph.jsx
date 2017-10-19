import React from 'react';
import styles from './paragraph.scss';

export default class Paragraph extends React.Component {
    constructor (props) {
        super(props);
    }
    clickHandler () {
        this.props.updateTime();
    }
    render () {
        return (
            <p
                className={styles.text}
                onClick={this.clickHandler.bind(this)}
            >{this.props.text} {this.props.time}</p>
        );
    }
}
