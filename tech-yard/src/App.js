
import React,{useEffect} from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;
import './App.css';
import { selectUser,login,logout } from './features/userSlice' ;
import db,{ auth } from './firebase';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Score from './Score';
import {Switch, Route} from "react-router-dom";

function App() {
 const user=useSelector(selectUser) ;
 const dispatch = useDispatch() ;

 useEffect(() => {
   auth.onAuthStateChanged( (authUser)=>{
     if( authUser){
       // user login
       dispatch(login({
         uid:authUser.uid,
         photo:authUser.photoURL,
         email:authUser.email,
         displayName:authUser.displayName,
       })) ;
     }else{
       // user logout
       dispatch(logout()) ;
     }
   });
 },[]) ;

  return (
    <Switch>
        <Route exact path="/" >
            {user? <Home/> : <Login/>}
        </Route>
        <Route exact path="/Profile" >
            {user? <Profile/> : <Login/>}
        </Route>
        <Route exact path="/score" >
            {user? <Score/> : <Login/>}
        </Route>
       
    </Switch>
  );
}

export default App;
