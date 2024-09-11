// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Tenth from './pages/tenth'; 
import Twelth from './pages/twelth';
// import blogPosts from './components/pages/blog';
import Tenthcard1 from './pages/tenthcard1'
import Details from './pages/details1'
import Domain_desc from './pages/domain_description'


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
        <Route path="/mentorship" element={<Domain_desc />} /> 
      </Routes>
    </Router>
  );
}

export default App;
