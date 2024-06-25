import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

function LastTweets(props) {

    const [tweetId, setTweetId] = useState('')
    const [displayedTweets, setDisplayedTweets] = useState([])

  const handleLikeTweet = () => {
    console.log('liked')
  }

  const handleDeleteTweet = () => {
    const tweetToRemove = props._id
    fetch(`http://localhost:3000/tweets/${tweetToRemove}`, {
    method: 'DELETE'})
    .then(data => {
        setDisplayedTweets(data)
    })
    console.log('tweet removed')
    }






    return(
        <div className={styles.tweetContainer}>
			{/* {symbol for profiles /* <img src={props.urlToImage} className={styles.image} alt={props.title} /> */} 
			<div className={styles.topText}>
				<h6 className={styles.username}>User</h6>
                <p>{props.tweet}</p>
                <p>{props.numberOfLikes}</p>
                <p>{props._id}</p>
				<FontAwesomeIcon onClick={() => handleLikeTweet()} icon={faHeart}  className={styles.heartIcon} />
                <FontAwesomeIcon onClick={() => handleDeleteTweet()} icon={faTrash}  className={styles.trashIcon} />
			</div>
		</div>
    )
}

export default LastTweets;