import React from 'react';
import './stylesheets/App.css';

import Header from './components/header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <code>Coming soon!</code>
        </p>
      </div>
    );
  }
}

export default App;
