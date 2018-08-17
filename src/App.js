import React from 'react';
import './stylesheets/App.css';

import Header from './components/header/Header';
import Home from './components/content/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
