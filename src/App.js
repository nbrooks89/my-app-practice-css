import { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Packages from './pages/packages/Packages';
import Customers from './pages/customers/Customers';
import StartHosting from './pages/startHosting/StartHosting';
import NotFound from './pages/notfound/NotFound';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import Footer from './Components/footer/Footer';
import Button from './Components/UI/button/Button';
function App() {

  
  return (
    <div className="App">

      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/start-hosting" element={<StartHosting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
