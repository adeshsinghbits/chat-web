import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "../features/authSlice";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true); // Local state to track auth check

  useEffect(() => {
    dispatch(checkAuth()).finally(() => setChecking(false));
  }, [dispatch]);

  if (checking) {
    return <p>Loading...</p>; 
  }

  return authUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
