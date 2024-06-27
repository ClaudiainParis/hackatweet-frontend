import { useSelector } from 'react-redux';
import Login from '../components/Login';
// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';
import Home from '../components/Home';
// import Tweet from '../components/Tweet';
// import LastTweets from '../components/LastTweets';
import { login, logout} from '../reducers/users'
import Trend from '../components/Trend';
import SignIn from '../components/SignIn';

function Index() {


  const user = useSelector((state) => state.users.value);
  
  if(!user.token){
    return <Login />
  } else{
  return <Home />;
  }
  // return <Trends />

}

export default Index;
