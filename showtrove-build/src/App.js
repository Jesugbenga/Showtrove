import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import BrowseScreen from "./screens/BrowseScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
      
      // Set loading to false once authentication status is determined
      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  // Render a loading indicator while loading
  if (loading) {
    return (
      <div className="app">
        
      </div>
    );
  }

  return (
    <div className="app">
      <Router>
        {/* Render the LoginScreen if there is no user */}
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            {/* Use the 'element' prop to render the components */}
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
            {/* <Route path="/page/:movieId" element={<PageScreen />} /> {/* Dynamic parameter */}
            <Route path="/browse" element={<BrowseScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
