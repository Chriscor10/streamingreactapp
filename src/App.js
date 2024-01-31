import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import FeaturedContent from './components/featuredContent';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SideBar/>
     <FeaturedContent/>
    </div>
  );
}

export default App;
