import React, { useState, useEffect } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
    <div className={`loginScreen ${show ? "loginScreen__black-bar" : ""}`}>
        <div className="loginScreen__background">
            <img 
            className="loginScreen__logo"
                src="showtrove-temp.png"
                alt=""
            />
            <button onClick={() => setSignIn(true)}
            className="loginScreen__button">  Sign In </button>

            <div className="loginScreen__gradient" />
        </div>

        <div className="loginScreen__body">  
            {signIn ? (
                <SignupScreen />
            ) : (
                <>  
                    <h1> Your favourite shows, movies, TV programmes and more. </h1>
                    <h2> Login anywhere. Visit at any time. </h2>
                    <h3> Ready to explore? Enter your email to create or login to your profile. </h3>
                

                    <div className="loginScreen__input">
                        <form>
                            <input type="email"
                            placeholder="Email Address"/>
                            <button onClick={() => setSignIn(true)}
                            className="loginScreen__getStarted"> LET'S GET STARTED {">"} </button>
                        </form>
                    </div>


                    <div className="loginScreen__back">
                        <div>
                            <div className="loginScreen__content">
                                <div>
                                <h1 className="loginScreen__text"> Visit everywhere. </h1>
                                <h3 className="loginScreen__text"> Get the latest updates on trending and upcoming movie titles and series. </h3>
                                </div>
                                <img
                                className="loginScreen__textImage"
                                src="https://www.amazon.com/gp/video/static/sl/lp/xray/images/masthead-4-en.png"
                                alt=""
                                />
                            </div>

                            <div className="loginScreen__content">
                                <div>
                                <h1 className="loginScreen__text"> Access your favourite platforms. </h1>
                                <h3 className="loginScreen__text"> One stop shop for access to all your favourite shows and respective platforms. </h3>
                                </div>
                                <img
                                className="loginScreen__textImage"
                                src="https://uticatangerine.com/wp-content/uploads/2020/09/streaming.png"
                                alt=""
                                />
                            </div>

                            <div className="loginScreen__content">
                                <div>
                                <h1 className="loginScreen__text"> Be the first to know. </h1>
                                <h3 className="loginScreen__text"> Get the inside scoop and know when your favourite shows are on and streaming, never miss a new release. </h3>
                                </div>
                                <img
                                className="loginScreen__textImage"
                                src="https://cdn.dribbble.com/userupload/5186845/file/original-2499451b4e6bc3465bda8551676fa326.png?resize=752x"
                                alt=""
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
    )
}

export default LoginScreen;
