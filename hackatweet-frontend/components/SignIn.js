import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/users';
import styles from '../styles/SignIn.module.css';
import Moment from 'react-moment';
import { Modal } from 'antd';


function SignIn() {

    const dispatch = useDispatch();
	// const users = useSelector((state) => state.users.value);


    // const [signInfirstname, setSignInfirstname] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
                console.log(data)
                // console.log(signInfirstname)
                console.log(signInUsername)
                console.log(signInPassword)
				if (!data.result) {
                    console.log('false')
                } else {
					dispatch(login({username: signInUsername}));
                    // setSignInfirstname('');
					setSignInUsername('');
					setSignInPassword('');
                }
                console.log('button signin clicked')
				}
			);
	}; 

return (
			<div className={styles.registerContainer}>
			{/* add tweeter reversed symbol and cross symbol to close modal */}
				<div className={styles.registerSection}>
					<p>Connect to Hackatweet</p>
                    {/* <input type="text" placeholder="First name" id="signInfirstname" onChange={(e) => setSignInfirstname(e.target.value)} value={signInfirstname} /> */}
					<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button id="connection" onClick={() => handleConnection()}>Sign in</button>
				</div>
			</div>
)
	}




export default SignIn;