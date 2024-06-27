import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { login } from "../reducers/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTwitter } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import SignIn from "./SignIn";
import { useDispatch } from "react-redux";
import Image from "next/image";
import SignUp from "./SignUp";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };

  const handleSignInCancel = () => {
    setIsSignInModalVisible(false);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalVisible(false);
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftSide}>
          <Image
            src="/twiter-bg.jpg"
            alt="Twitter-background-image"
            width={6000}
            height={10000}
            className={styles.twitterBackgroundImage}
          />
        </div>
        <div className={styles.rightSide}>
          <Image
            src="/twitter-2.svg"
            alt="Twitter-reversed"
            width={100}
            height={100}
            className={styles.twitterLogo}
          />
          <h1 className={styles.title}> See what's</h1>
          <h1 className={styles.title}>happening</h1>
          <h3 className={styles.h3}>Join Hackatweet today.</h3>
          <Button
            className={styles.signUpButton}
            type="primary"
            onClick={showSignUpModal}
          >
            Sign Up
          </Button>
          <Modal
            centered
            className='signInModal'
            open={isSignUpModalVisible}
            onCancel={handleSignUpCancel}
            footer= {null}
           >
            <SignUp />
          </Modal>

          <p className={styles.p}>Already have an account ?</p>

          <Button
            className={styles.signInButton}
            type="primary"
            onClick={showSignInModal}
          >
            Sign In
          </Button>
          <Modal
            centered
            className='signUpModal'
            open={isSignInModalVisible}
            onCancel={handleSignInCancel}
            footer= {null}
          >
            <SignIn />
          </Modal>
        </div>
      </main>
    </div>
  );
}

export default Login;
