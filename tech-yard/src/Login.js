
import React from 'react'
import {useState} from 'react';
import db ,{ auth,provider } from './firebase';
import google_tag from './google_tag.png' ;
import "./Login.css";
import log from './log.svg'
import register from './register.svg'


function Login() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [flag, setFlag]=useState(0)

    const signInWithGoogle=()=>{
         auth.signInWithPopup(provider).catch((error)=> alert(error.message)) ;
    }
    const signInWithIdPass=()=>{
        auth.signInWithEmailAndPassword(email, password).catch((error)=> alert(error.message)) ;
    }
    const signUp=()=>{
        auth.createUserWithEmailAndPassword(email, password).catch((error)=> alert(error.message)) ;
    }

    return (
        <div className={`containerL ${ flag && 'sign-up-mode'}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="email" onChange={ e=> setEmail(e.target.value)} placeholder="Username" id="signin_mail" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" onChange={ e=> setPassword(e.target.value)} placeholder="Password" id="signin_password" />
                        </div>
                        <input type="submit" onClick={signInWithIdPass} value="Login " className="btnn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                        
                            <img onClick={signInWithGoogle} src={google_tag} className="img img-fluid g" />
                            {/* <!-- <a href="#" className="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a> --> */}
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" value={email} onChange={ e=> setEmail(e.target.value)} placeholder="Username" id="signup_mail" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" value={password} onChange={ e=> setPassword(e.target.value)} placeholder="Password" id="signup_password"/>
                        </div>
                        <button type="submit" onClick={signUp} className="btnn ">Sign up</button>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            New here , please sign up and get the best recommended courses for you ...
                        </p>
                        <button className="btnn transparent" onClick={e=>setFlag(true)} id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src={log} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            have you registered, please login from here
                        </p>
                        <button className="btnn transparent"  onClick={e=>setFlag(false)} id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src={register} className="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login