import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/LastTweets.module.css';

function Hashtags() {


    return(
        <div className={styles.hashtagContainer}>
            <div>#hashtag</div>
            <div>32</div>
        </div>
    )

}

export default Hashtags;