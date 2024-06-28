import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTweet, removeTweet, addLike } from '../reducers/tweets';
import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

function LastTweets(props) {

    const dispatch = useDispatch();
    const loggedUser = useSelector((state) => state.users.value);
    const tweet = useSelector((state)=> state.tweets.value)

  const [tweetId, setTweetId] = useState('')
  const [displayedTweets, setDisplayedTweets] = useState([])
  const [liked, setLiked] = useState(false)

    console.log("tweet", props.username)
    console.log(loggedUser.username)

  const loggedUsername = loggedUser.username

  const handleLikeTweet = () => {
    const idTweetToLike = props._id
    fetch(`http://localhost:3000/tweets/like/${idTweetToLike}`,
      {method: 'POST'})
			.then(response => response.json())
			.then(data => {
        console.log(data)
			setLiked(true)
			});
  };

  let iconStyle = {};
	if (liked) {
		iconStyle = { 'color': '#E9BE59' };
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
  if(loggedUser){
    likeAndDelete= 
    <div>
      <FontAwesomeIcon onClick={() => handleLikeTweet()} icon={faHeart}  style={iconStyle} /> {props.numberOfLikes} <br></br>
      <FontAwesomeIcon onClick={() => handleDeleteTweet()} icon={faTrash}  className={styles.trashIcon} /> {props.username}
    </div>
  } else {
    likeAndDelete=
      <div>
    <FontAwesomeIcon onClick={() => handleLikeTweet()} icon={faHeart}  className={styles.heartIcon} /> {props.numberOfLikes}
    </div>
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