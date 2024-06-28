import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet, removeLike, initialiseTweets } from '../reducers/tweets';
import styles from '../styles/Tweet.module.css';

function Tweet() {

    const dispatch = useDispatch();
  

    const user = useSelector((state)=> state.users.value)

    const [tweet, setTweet] = useState('')
    const token = user.token

    const handleTweet = () => {
        fetch('http://localhost:3000/tweets/newtweet', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({tweet : tweet, token : token, username: user.username }),
		}).then(response => response.json())
			.then(data => {
                console.log('mydata', data)
				if (!data.result) {
                    console.log('write a tweet')
                } else {
					setTweet('');
                    dispatch(initialiseTweets(data.tweet))
                }
				}
			);
        console.log('tweet sent!')
    }

    return(
        <div className={styles.tweetContainer}>
				<div className={styles.tweetSection}>
                    <div className={styles.inputContainer}>
                        <input className={styles.tweetInput} type="text" placeholder="What's up ?" id="tweet" maxLength='280'
                        onChange={(e) => {setTweet(e.target.value)}} value={tweet} />
                    </div>
                    <div className={styles.sendContainer}>
                        <p>{tweet.length}/280</p>
					    <button className={styles.button} id="tweetButton" onClick={() => {handleTweet()}}>Tweet</button>
                    </div>
				</div>
			</div>
    )
}

export default Tweet; 