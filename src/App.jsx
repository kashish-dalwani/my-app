import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar.jsx';
import Container1 from './Container1/container.jsx';
import Cards from './Cards/cards.jsx'


function App() {
  return (
    <div>
      <Navbar />
      <Container1 />
      <div>
        <h>Hello</h>
      </div>
      <Cards />
    </div>

  );
}

export default App