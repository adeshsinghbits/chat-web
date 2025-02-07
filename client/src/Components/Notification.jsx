import {  useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center shadow-lg"
      >
        <span className="mr-2">✅</span>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2">
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
