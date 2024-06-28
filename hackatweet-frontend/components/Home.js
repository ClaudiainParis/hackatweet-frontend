import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialiseTweets, addNewTweet } from "../reducers/tweets";
import { addHashtags } from "../reducers/hashtags";
import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Hashtags from "./Hashtags";
import { logout } from "../reducers/users";
import Image from "next/image";
import Link from "next/link";

function Home() {
  const dispatch = useDispatch();

  const tweets = useSelector((state) => state.tweets.value);
  const user = useSelector((state) => state.users.value);
  const hashtags = useSelector((state) => state.hashtags.value);

  // Affichage des Tweets
  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tweets/alltweets")
      .then((response) => response.json())
      .then((data) => {
        dispatch(initialiseTweets(data.alltweets));
        dispatch(addHashtags(data.hashtags))
      });
  }, []);

  const tweetsToDisplay = tweets
    .slice(0)
    .reverse()
    .map((data, i) => {
      console.log('m',user.firstname)
      return (
        <LastTweets
          key={i}
          {...data}
          user={user.firstname}
          username={user.username}
          tweet={data.text}
          like={data.numberOfLikes}
          id={data._id}
        />
      );
    });

  //Affichage des Hashtags
  const [hashtagsList, setHashtagsList] = useState({ Loading: 0 });

  useEffect(() => {
    fetch("http://localhost:3000/tweets/hashtags")
      .then((response) => response.json())
      .then((data) => {
        setHashtagsList(data.hashtags);
        // dispatch(initialiseHashtags(data.hashtags))
      });
  }, []);

  const hashtagsToDisplay = [];
  for (let i = 0; i < Object.keys(hashtagsList).length; i++) {
    hashtagsToDisplay.push(
      <Hashtags
        hashtag={Object.keys(hashtagsList)[i]}
        nbr={Object.values(hashtagsList)[i]}
      />
    );
  }

  const handleLogOut = () => {
    dispatch(logout());
    console.log("logout");
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.colonne}>
          <Image
            src="/twitter-2.svg"
            alt="Twitter-reversed"
            width={70}
            height={70}
            className={styles.twitterLogo}
          />
          <Image
            src="/egg-flat.svg"
            alt="User Logo"
            width={70}
            height={70}
            className={styles.userLogo}
          />
          <p>{user.firstname}</p>
          <p>@{user.username}</p>
          <button
            className={styles.logoutButton}
            onClick={() => handleLogOut()}
          >
            Logout
          </button>
        </div>

        <div className={styles.colonnecentre}>
          <div className={styles.topContainer}>
            <span className={styles.hometitle}>Home</span>
            <Tweet />
          </div>
          <div className={styles.displayedtweets}>
            <h1 className={styles.title}>{tweetsToDisplay}</h1>
          </div>
        </div>
        <div className={styles.colonne}>
          <Link href="/trendspage">
            <span classname={styles.trendslink}>Trends</span>
          </Link>

          {hashtagsToDisplay}
        </div>
      </main>
    </div>
  );
}

export default Home;
