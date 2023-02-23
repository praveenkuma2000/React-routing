import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Product';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element= {<Home />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Products' element={<Products />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
