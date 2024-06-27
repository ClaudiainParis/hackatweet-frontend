import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/users';
import styles from '../styles/SignUp.module.css';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Image from "next/image";

function SignUp() {

    const dispatch = useDispatch();

    const [signUpfirstname, setSignUpfirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const handleSignUp = () => {
        fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname : signUpfirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
                console.log(data);
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token, firstname: signUpfirstname }));
                    setSignUpfirstname('');
					setSignUpUsername('');
					setSignUpPassword('');
				}
                console.log('button clicked')
			});


        
    }

    return (
        <div className={styles.registerContainer}>
        <Image src="/twitter-2.svg" alt="Twitter-reversed" width={100} height={100} className={styles.twitterLogo}/>
            <div className={styles.registerSection}>
                <p>Create your Hackatweet account</p>
                <input type="text" placeholder="Firstname" id="signUpfirstname" onChange={(e) => setSignUpfirstname(e.target.value)} value={signUpfirstname} />
                <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                <button id="connection" onClick={() => handleSignUp()}>Sign up</button>
            </div>
        </div>
)

}

export default SignUp;