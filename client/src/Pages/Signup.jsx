import { Helmet } from 'react-helmet-async'
import SignupForm from '../Components/SignupForm'

function Login() {
  return (
    <div>
        <Helmet>
            <title>Signup - chatapp</title>
        </Helmet>
        <SignupForm />
    </div>
  )
}

export default Login