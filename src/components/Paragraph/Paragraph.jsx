import React from 'react';
import styles from './paragraph.scss';

const Paragraph = (props) => {
    // function clickHandler (updateTime) {
    //
    // }
    return (
        <div>
            <p className={styles.container}>{props.text}</p>
            <button type='button' onClick={props.updateTime}>Update Time</button>
        </div>
    );
};

export default Paragraph;