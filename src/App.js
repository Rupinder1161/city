import React from 'react';
import './App.css';
import Firstside from './components/Firstside'
import Secondside from './components/Secondside'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="app">
    <div className="app_body">
      <Firstside/>
      <Secondside/>
      </div>
    </div>
  );
}

export default App;
