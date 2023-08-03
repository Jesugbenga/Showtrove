import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";
import profile from "../profile pic.png";

function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img 
                    src={profile}
                    alt="" 
                />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plan: Free</h3>
                        <button onClick={() => auth.signOut()} 
                        className="profileScreen__signOut">Sign Out</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileScreen;