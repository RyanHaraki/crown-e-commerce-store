import React from 'react'
import SignIn from '../../sign-in/Sign-in'
import SignUp from '../../sign-up/sign-up'
import './Signup.scss'

const Signup = () => {
    return (
        <div className="sign-page">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Signup
