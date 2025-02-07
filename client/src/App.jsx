import './App.css'
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Signup from "./Pages/Signup";
import Layout from "./Layout/Layout";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ChatPage from "./Pages/ChatPage";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  const { mode } = useSelector((state) => state.theme);

  return (
    
    <div  className={`${mode == 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}>
      <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </div>
  )
}

export default App
