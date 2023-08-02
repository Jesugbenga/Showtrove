import React from "react";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <>
      <div className="loadingScreen">
        <h2>Loading...</h2>
      </div>

      <div className="cube">
        <div className="topD"></div>
        <div>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>

        <div className="cube2">
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>

          <div className="cube3">
            <div className="top3"></div>
            <div>
              <span style={{ "--i": 0 }}></span>
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 3 }}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
