import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';

function Home() {

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

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
        {tweetsToDisplay}
        </h1>
      </main>
    </div>
  );
}

export default Home;
