import React from 'react';
// import styles from './paragraph.scss';

export default class Paragraph extends React.Component {
    constructor (props) {
        super(props);
    }
    clickHandler () {
        this.props.updateTime();
    }
    render () {
        return (
            <p onClick={this.clickHandler.bind(this)}>{this.props.text} {this.props.time}</p>
        );
    }
}

// const Paragraph = (props) => {
//     return (
//         <p onClick={() => props.updateTime()}>{props.text} {props.time}</p>
//     );
// };
//
// export default Paragraph;