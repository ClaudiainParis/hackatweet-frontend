import { useState } from 'react';
import styles from '../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import SignIn from './SignIn';


function Login() {

  const [open, setOpen] = useState(false)
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

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
  const handleSignUp = () => {
    console.log('button sign Up clicked');
    setIsSignUpModalVisible(true)
  }

  const handleSignIn = () => {
    console.log('button sign in clicked');
    setIsSignInModalVisible(isSignInModalVisible)
  }

  const showModal = () => {
    setIsSignInModalVisible(isSignInModalVisible);
  }

  let signInModalContent;
   
  //   <div className= {styles.modalContainer}>
  //     <Modal title='Sign In Modal' open={isSignInModalVisible}>
  //       <p>test</p>
  //       </Modal>
  //   </div>
  // )

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

    // const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
  return (
    <div>
      <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} open={isSignInModalVisible} closable={false} footer={null}>
					{signInModalContent}
				</Modal>
			</div>
      <main className={styles.main}>
      {/* <FontAwesomeIcon icon={faTwitter} /> */}
        <h1 className={styles.title}>
          See what's
        </h1>
        <h1 className={styles.title}>
         happening
        </h1>
        <h3 className={styles.h3}>Join Hackatweet today.</h3>
        <button className={styles.signUpButton} onClick={()=> handleSignUp()} >Sign up</button>
        <p className={styles.p}>Already have an account ?</p>
        <Button type="primary" onClick={showModal}>
          Sign In
        </Button>
        <Modal
          open={open}
          title="Connect to Hackatweet"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Submit
            </Button>,
           
          ]}
        >
          <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
          <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} /> /
        </Modal>
      

      </main>

    </div>
  );
}

export default Login;