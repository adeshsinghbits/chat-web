import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { MdChat, MdGroup, MdHome, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { mode } = useSelector((state) => state.theme);
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-sm p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Chatapp</h1>
        
        <nav className="hidden md:flex space-x-16 text-lg">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-200"}><MdHome size={28} className="inline-block  mr-2"/>Home</NavLink>
          <NavLink to="/chat" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-200"}><MdChat size={28} className="inline-block  mr-2"/>Chat</NavLink>
          <NavLink to="/group" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-200"}><MdGroup size={28} className="inline-block  mr-2"/>group</NavLink>
        </nav>
        
        <div className="hidden md:block">
          { !authUser ? (
            <NavLink to="/signup" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">Sign Up</NavLink>
          ) : (
            <NavLink to="/profile" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">Profile</NavLink>
          )

          }
          <button 
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2  dark:bg-gray-700 rounded-lg text-lg"
        >
          {mode === "light" ? <MdOutlineDarkMode size={28} /> : <MdOutlineLightMode size={28} />}
        </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={28} /> : <BiMenuAltLeft  size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 space-y-2 text-left">
          <NavLink 
            to="/" 
            className="block py-2 " 
            onClick={() => setIsOpen(false)}>
            <MdHome size={28} className="inline-block  mr-2"/>
            Home
          </NavLink>
          <NavLink 
            to="/chat" 
            className="block py-2 hover:bg-blue-500" 
            onClick={() => setIsOpen(false)}>   
            <MdChat size={28} className="inline-block  mr-2"/>
            Chat
          </NavLink>
          <NavLink 
            to="/group" 
            className="block py-2 hover:bg-blue-500"
            onClick={() => setIsOpen(false)}>
            <MdGroup size={28} className="inline-block  mr-2"/>
            Group
          </NavLink>
          <NavLink to="/signup" 
            className="block py-2 text-center bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-500" 
            onClick={() => setIsOpen(false)}>
            Sign Up
          </NavLink>
        </nav>
      )}
    </header>
  );
}
