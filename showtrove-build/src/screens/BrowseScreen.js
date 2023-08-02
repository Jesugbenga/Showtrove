import React from "react";
import "./BrowseScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function BrowseScreen() {
  return (
    <div className="browseScreen">
      <Nav />

      
      <Row fetchUrl={requests.fetchTrending} isLargeRow />
      <Row fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row fetchUrl={requests.fetchDocumentaries} isLargeRow />         
    </div>
  )
}

export default BrowseScreen;