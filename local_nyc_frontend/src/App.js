import React from 'react';
import './App.css';
import Header from './Components/header.jsx';
import Navbar from './Components/navbar.jsx';

function App() {
  return (
    <div className="App">
       <header className="App-header"> 
       <Header />
       <Navbar />
       </header>
    </div>
  );
}

export default App;
