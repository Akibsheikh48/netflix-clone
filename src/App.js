import React from 'react';
import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import requests from './request';
import Row from './Row';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
     <Router>
      <Navbar />
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOrignals} isLargeRow />
      <Row title='Tranding Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Rommance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Animation Movies' fetchUrl={requests.fetchAnimation} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
