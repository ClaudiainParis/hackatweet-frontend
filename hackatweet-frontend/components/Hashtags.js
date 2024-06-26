import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Hashtags.module.css';

function Hashtags(props) {


    return(
        <div className={styles.hashtagContainer}>
            <div className={styles.textHashtag}>{props.hashtag}</div>
            <div className={styles.nbrHastag}>{props.nbr} tweet</div>
        </div>
    )

}

export default Hashtags;