import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../reducers/tweets';
import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Tweet from './Tweet';
import Hashtags from './Hashtags';
import { logout } from '../reducers/users';

function Home() {
  
  const dispatch= useDispatch()

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
    <LastTweets key={i} {...data} tweet={data.text} like= {data.numberOfLikes} id={data._id}/>
   )
  });

  const handleLogOut = () =>{
    dispatch(logout())
    console.log('logout');
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.colonne}>
        <button onClick={()=> handleLogOut()}>Logout</button>
        </div>

        <div className={styles.colonnecentre}>
          <h2>Home</h2>
          <Tweet />
          <h1 className={styles.title}>{tweetsToDisplay}</h1>
        </div>
        
        <div className={styles.colonne}>
          <h2>Trend</h2>
          <Hashtags />
        </div>
      </main>
    </div>
  );
}

export default Home;
