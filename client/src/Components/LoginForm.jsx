import { useState } from 'react';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import {  useDispatch,  useSelector } from 'react-redux';
import { loginUser } from '../features/authSlice';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setIsSubmitting(true)
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    alert(message)
    setIsSubmitting(false)
    navigate("/chat")
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl text-gray-800 font-bold mb-6 text-center">Sign in</h2>
        <p  className='text-gray-600'>Don&apos;t have an account? <a href="signup" className="text-blue-500 hover:underline font-semibold">Sign up</a></p>
        <form onSubmit={handleLogin}>
          <div className="mb-4 mt-8 text-left">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4 relative mt-8
          ">
            <label className=" text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <a href="#" className="mb-8 text-black ml-36 text-sm hover:underline">
            Forgot Password?
            </a>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
            <span
              className="absolute text-gray-600 top-12 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiSolidHide size={30}/> : <BiSolidShow size={30}/>}
            </span>
          </div>

          <button
            type="submit"
            className="w-full font-semibold bg-black text-white py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Login'}
          </button>
          <p className='mt-4  text-gray-600'>or</p>
          <div className='flex justify-center text-gray-400  items-center mt-4 gap-4'>
            <FaGoogle size={30} className='hover:text-gray-800  cursor-pointer'/>
            <FaGithub size={30} className='hover:text-gray-800  cursor-pointer'/>
            <FaFacebook size={30} className='hover:text-gray-800  cursor-pointer'/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
