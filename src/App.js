import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import FeaturedMovieList from './components/featuredMovieList';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SideBar/>
     <FeaturedMovieList/>
    </div>
  );
}

export default App;
