import React, { useState } from 'react'
import './login.css'
import '../linkedin.png'
import { auth } from './Firebase'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Login = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                }))
            }).catch((error) => alert(error))
    }
    const register = () => {
        if (!name) {
            return alert("Please Enter a Valid Name")
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }))
                })
        }).catch((error) => alert(error))
    }


    return (
        <div className="container">
            <h2>Linked<span>
                <LinkedInIcon />
            </span></h2>
            <div className="text">
                <h1>Sign in</h1>
                <p>Stay updated on your professional world</p>
            </div>
            <form className="your-input" >
                <div className="input">
                    <input type="text" name="name"
                        id="name" required value={name} onChange={e => setName(e.target.value)} />
                    <label for="name">Name</label>
                </div>
                <div className="input">
                    <input type="email" name="email"
                        id="email" required value={email} onChange={e => setEmail(e.target.value)} />
                    <label for="email">Email</label>
                </div>
                <div className="input">
                    <input type="password" name="password"
                        id="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <label for="password">
                        Password
                    </label>
                </div>
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <a href="#" className="forgot-password-link">
                Forgot Password?
            </a>
            <p className="join-link">
                New to linkedin?
                <span className="join-now" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
