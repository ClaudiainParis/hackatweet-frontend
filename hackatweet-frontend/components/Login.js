import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { login } from "../reducers/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTwitter } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
// import SignIn from "./SignIn";
import { useDispatch } from "react-redux";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  const [signInLoading, setSignInLoading] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [signUpfirstname, setSignUpfirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(signInfirstname)
        console.log(signInUsername);
        console.log(signInPassword);
        if (!data.result) {
          console.log("false");
        } else {
          dispatch(login({ username: signInUsername,  token: data.token }));
          // setSignInfirstname('');
          setSignInUsername("");
          setSignInPassword("");
          router.push("/");
        }
        console.log("button signin clicked");
      });
  };

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpfirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpfirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          router.push("/");
        }
        console.log("button clicked");
      });
  };

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };

  const handleSignInOk = () => {
    setSignInLoading(true);
    setTimeout(() => {
      setSignInLoading(false);
      setIsSignInModalVisible(false);
    }, 3000);
  };

  const handleSignInCancel = () => {
    setIsSignInModalVisible(false);
  };

  const handleSignUpOk = () => {
    setSignUpLoading(true);
    setTimeout(() => {
      setSignUpLoading(false);
      setIsSignUpModalVisible(false);
    }, 3000);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalVisible(false);
  };

  const twitterIcon = <FontAwesomeIcon icon={faCross} rotation={180} style={{color: "#ffffff",}} />
  return (
    <div>
      <main className={styles.main}>
       {twitterIcon}
        <h1 className={styles.title}> See what's</h1>
        <h1 className={styles.title}>happening</h1>
        <h3 className={styles.h3}>Join Hackatweet today.</h3>
       
        <Button type="primary" onClick={showSignInModal}>
          Sign In
        </Button>
        <Modal
          open={isSignInModalVisible}
          title="Connect to Hackatweet"
          onOk={handleSignInOk}
          onCancel={handleSignInCancel}
          footer={[
          
            <Button
              key="submit"
              type="primary"
              loading={signInLoading}
              onClick={handleConnection}
            >
              Sign in
            </Button>,
          ]}
        >
          <input
            type="text"
            placeholder="Username"
            id="signInUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            type="password"
            placeholder="Password"
            id="signInPassword"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />{" "}
          
          </Modal>
          <p className={styles.p}>Already have an account ?</p>

        {/* signup modal */}
       
        <Button type="primary" onClick={showSignUpModal}>
          Sign Up
        </Button>
        <Modal
          open={isSignUpModalVisible}
          title="Connect to Hackatweet"
          // onOk={handleSignUpOk}
          onCancel={handleSignUpCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={signUpLoading}
              onClick= {handleSignUp}
            >
              Sign up
            </Button>,
          ]}
        >
          <input
            type="text"
            placeholder="Firstname"
            id="signUpfirstname"
            onChange={(e) => setSignUpfirstname(e.target.value)}
            value={signUpfirstname}
          />
          <input
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
          <input
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
          {" "}
        </Modal>
      </main>
    </div>
  );
}

export default Login;
