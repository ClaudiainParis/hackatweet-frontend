import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../reducers/tweets';
import styles from '../styles/Tweet.module.css';

function Tweet() {

    const [tweet, setTweet] = useState('')
    const [tweetCount, setTweetCount] = useState(0);

   

    // const charCounter = tweetCount;

    const handleTweet = () => {
        fetch('http://localhost:3000/tweets/newtweet', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({tweet : tweet }),
		}).then(response => response.json())
			.then(data => {
                console.log(data)
                console.log(tweet)
                console.log(tweet.length)
				if (!data.result) {
                    console.log('write a tweet')
                } else {
					setTweet('');
                    setTweetCount(0)
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
                        onChange={(e) => {setTweet(e.target.value) ; setTweetCount(tweet.length)}} value={tweet} />
                    </div>
                    <div className={styles.sendContainer}>
                        <p>{tweetCount}/280</p>
					    <button className={styles.button} id="tweetButton" onClick={() => handleTweet()}>Tweet</button>
                    </div>
				</div>
			</div>
    )
}

export default Tweet; 