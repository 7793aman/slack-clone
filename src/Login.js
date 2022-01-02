import React from "react";
import "./Login.css"
import {auth,provider} from './firebase'
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispacth] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispacth({
                type: actionTypes.SET_USER,
                user:result.user
            })
        }).catch(error => {
            alert(error.message)
        })
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="/slack1.png" alt="" />
                <h1>Sign in to Clever Programmer HQ</h1>
                <p>cleverprogrammer.slack.com</p>
                <button onClick={signIn}>Sign In with Google </button>
            </div>

        </div>
    )
}

export default Login;