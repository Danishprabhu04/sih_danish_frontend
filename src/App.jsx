// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Tenth from './components/pages/tenth'; 
import Twelth from './components/pages/twelth';
// import blogPosts from './components/pages/blog';
import Tenthcard1 from './components/pages/tenthcard1'
import Details from './components/pages/details1'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenth" element={<Tenth />} /> {/* Add route for Tenth component */}
        <Route path="/twelth" element={<Twelth />} /> 
        {/* <Route path="/blog" element={<blogPosts />} />  */}
        <Route path="/card1" element={<Tenthcard1 />} /> 
        <Route path="/details" element={<Details />} /> 
      </Routes>
    </Router>
  );
}

export default App;
