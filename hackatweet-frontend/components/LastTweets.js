import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet, removeTweet } from '../reducers/tweets';
import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

function LastTweets(props) {


    const dispatch = useDispatch();

  const [tweetId, setTweetId] = useState('')
  const [displayedTweets, setDisplayedTweets] = useState([])

  const handleLikeTweet = () => {
    const idTweetToLike = props._id
    fetch(`http://localhost:3000/tweets/like/${idTweetToLike}`,
      {method: 'POST'})
        .then(console.log('tweet like'))
        dispatch(addLike())
  }

  const handleDeleteTweet = () => {
    const idTweetToRemove = props._id
    fetch(`http://localhost:3000/tweets/${idTweetToRemove}`, {
    method: 'DELETE'})
    .then(data => {
        setDisplayedTweets(data)
    })
    dispatch(removeTweet())
    console.log('tweet removed')
  }

  return(
    <div className={styles.tweetContainer}>
    {/* {symbol for profiles /* <img src={props.urlToImage} className={styles.image} alt={props.title} /> */} 
      <h3 className={styles.username}>User</h3>
      <p>{props.tweet}</p>
      <FontAwesomeIcon onClick={() => handleLikeTweet()} icon={faHeart}  className={styles.heartIcon} /> {props.numberOfLikes} <br></br>
      <FontAwesomeIcon onClick={() => handleDeleteTweet()} icon={faTrash}  className={styles.trashIcon} /> {props._id}
    </div>
  )
}

export default LastTweets;