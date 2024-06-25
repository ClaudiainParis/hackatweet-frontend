import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Trends.module.css';

  //Affichage des Hashtags
//   const [hashtag, setHashtag] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:3000/tweets//byhash/#awesome')
//     .then(response => response.json())
//     .then(data => {
//        setHashtag(data.tweetsWhithHashtag)
//     })
//   }, [])

//   const hashtagToDisplay = hashtag.map((data, i) => {
//    return (
//     <LHashtags key={i} {...data} hashtag={data.hashtag}/>
//    )
//   });

function Trends() {

    return(
        <div>Trends</div>
    )
}

export default Trends; 