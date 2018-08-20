import React from 'react';
import './stylesheets/App.css';

import Header from './components/header/Header';
import Home from './components/content/Home';
import NavBar from './components/header/NavBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
