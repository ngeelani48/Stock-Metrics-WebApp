import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import ForexList from './components/forexList';
import DetailsExchange from './components/Details';

const App = () => (
  <Router>
    <div className=".App">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<ForexList />} />
      <Route path="/details/:id" element={<DetailsExchange />} />
    </Routes>
  </Router>
);

export default App;
