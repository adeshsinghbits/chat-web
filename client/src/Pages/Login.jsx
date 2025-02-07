import React from 'react'
import { Helmet } from 'react-helmet-async'
import LoginForm from '../Components/LoginForm'

function Login() {
  return (
    <div>
        <Helmet>
            <title>Login - chatapp</title>
        </Helmet>
        <LoginForm />
    </div>
  )
}

export default Login