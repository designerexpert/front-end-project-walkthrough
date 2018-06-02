import React, { Component } from 'react';
import LeftNav from './components/LeftNav/LeftNav';
import MainContent from './components/MainContent/MainContent';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <LeftNav />
        <MainContent />
      </div>
    );
  }
}

export default App;
