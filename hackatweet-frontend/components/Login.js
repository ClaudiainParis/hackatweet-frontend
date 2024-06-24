import styles from '../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';


function Login() {

    const twitterIcon = <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
  return (
    <div>
      <main className={styles.main}>
      {twitterIcon}
        <h1 className={styles.title}>
          See what's
        </h1>
        <h1 className={styles.title}>
         happening
        </h1>
        <h3 className={styles.h3}>Join Hackatweet today.</h3>
        <button className={styles.signUpButton}>Sign up</button>
        <p className={styles.p}>Already have an account ?</p>
        <button className={styles.signInButton}>Sign in</button>
      </main>
    </div>
  );
}

export default Login;