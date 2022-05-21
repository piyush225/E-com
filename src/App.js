import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <Router>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="Login/*" element={<Login />}/>
          <Route path="Checkout/*" element={<Checkout />}/>
          <Route path="Payment/*" element={<Payment />}/>
            <Header/>
          <Route path="/" element={<Home />} />
            <Header/>
          </Routes>
          </BrowserRouter>
      </div>
    // </Router>
  );
}

export default App;
