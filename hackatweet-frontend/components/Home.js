import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Tweet from './Tweet';
import Hashtags from './Hashtags';

function Home() {
  
  //Affichage des Tweets
  const [lastTweets, setLastTweets] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tweets/alltweets')
      .then(response => response.json())
      .then(data => {
        setLastTweets(data.alltweets)
      })
  }, [])

  const tweetsToDisplay = lastTweets.map((data, i) => {
   return (
    <LastTweets key={i} {...data} tweet={data.text} like={data.numberOfLikes} id={data._id}/>
   )
  });

  //Affichage des Hashtags
  const [hashtagsList, setHashtagsList] = useState({ 'Loading': 0  })

  useEffect(() => {
    fetch('http://localhost:3000/tweets/hashtags')
    .then(response => response.json())
    .then(data => {
      setHashtagsList(data.hashtags)
    })
  }, []);

  const hashtagsToDisplay = [];
  for (let i = 0; i<Object.keys(hashtagsList).length; i++) {
    hashtagsToDisplay.push(<Hashtags hashtag={Object.keys(hashtagsList)[i]} nbr={Object.values(hashtagsList)[i]}/>)
  }
  
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.colonne}>
          <p>Logo</p>
          <p>User Info</p>
          <button>Log out</button>
          
        </div>

        <div className={styles.colonnecentre}>
          <h2>Home</h2>
          <Tweet />
          <h1 className={styles.title}>{tweetsToDisplay}</h1>
        </div>
        
        <div className={styles.colonne}>
          <h2>Trends</h2>
          {hashtagsToDisplay}
        </div>
      </main>
    </div>
  );
}

export default Home;
