import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet, removeTweet } from '../reducers/tweets';
import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

function LastTweets(props) {


    const dispatch = useDispatch();

  const [tweetId, setTweetId] = useState('')
  const [displayedTweets, setDisplayedTweets] = useState([])

  const loggedUser = useSelector((state) => state.users.value);
  const loggedUserToken = loggedUser.token

  const handleLikeTweet = () => {
    const idTweetToLike = props._id
    fetch(`http://localhost:3000/tweets/like/${idTweetToLike}`,
      {method: 'POST'})
        .then(console.log('tweet like'))
        // dispatch(addLike())
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
  let likeAndDelete;
  if(!users.token){
    likeAndDelete=
    <div>
      <FontAwesomeIcon onClick={() => handleLikeTweet()} icon={faHeart}  className={styles.heartIcon} /> {props.numberOfLikes} <br></br>
      <FontAwesomeIcon onClick={() => handleDeleteTweet()} icon={faTrash}  className={styles.trashIcon} /> {props._id}
    </div>
  } else {
    likeAndDelete=
    <FontAwesomeIcon onClick={() => handleLikeTweet()} icon={faHeart}  className={styles.heartIcon} /> {props.numberOfLikes}
  }

  return(
    <div className={styles.tweetContainer}>
      <div className={styles.userContainer}>
   <Image
            src="/egg-flat.svg"
            alt="User Logo"
            width={70}
            height={70}
            className={styles.userLogo}
          />
      {/* <h3 className={styles.username}>Username</h3> */}
      {/* <h3 className={styles.username}>Username</h3> */}
      </div>
      <p>{props.tweet}</p>
      {likeAndDelete}
    </div>
  )
}

export default LastTweets;