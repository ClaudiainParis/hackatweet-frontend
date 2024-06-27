import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Trends.module.css';
import LastTweets from './LastTweets';

function Trends() {

// Affichage des Tweets
  const [tweetByHashtag, setTweetByHashtag] = useState([{
    "_id": "667c9e593e7f2a583db0768b",
    "text": "and an another #awesome one !",
    "creationDate": "2024-06-26T23:03:53.667Z",
    "numberOfLikes": 0,
    "hashtag": [
      "#awesome"
    ],
    "__v": 0
  },
  {
    "_id": "667ca929fc467e388ad1e940",
    "text": "This is #awesome (again)",
    "creationDate": "2024-06-26T23:50:01.135Z",
    "numberOfLikes": 0,
    "hashtag": [
      "#awesome"
    ],
    "__v": 0
  },
  {
    "_id": "667ca92bfc467e388ad1e942",
    "text": "This is #awesome (again)",
    "creationDate": "2024-06-26T23:50:03.819Z",
    "numberOfLikes": 0,
    "hashtag": [
      "#awesome"
    ],
    "__v": 0
  }])

  useEffect(() => {
    fetch(`http://localhost:3000/tweets/byhash/${'#awesome'}`)
      .then(response => response.json())
      .then(data => {
        setTweetByHashtag(data.tweetsWithHashtag)
      })
  }, [])

  const tweetsByHashtagToDisplay = tweetByHashtag.map((data, i) => {
   return (
    <LastTweets key={i} {...data} tweet={data.text} like={data.numberOfLikes} id={data._id}/>
   )
  });

    return(
        <div>
            <div className={styles.trendsContainer}>Trends</div>
            {tweetsByHashtagToDisplay}
        </div>
    )
}

export default Trends; 