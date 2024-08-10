import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar.jsx';
import Container1 from './Container1/container.jsx';
import Cards from './Cards/cards.jsx';
import Container2 from './Container2/cont2.jsx';
import Container3 from './Container3/cont3.jsx';
import Form from './Form/form.jsx';
import Footer from './Footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Container1 />
      <Cards />
      <Container2 />
      <Container3 />
      <Form />
      <Footer />
      
    </div>

  );
}

export default App