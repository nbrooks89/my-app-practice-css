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
import SideNavBar from "./Components/sideNavBar/SideNavBar";
function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  return (
    <div className="App">
      <SideNavBar isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} />
      <TopNavBar isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/start-hosting" element={<StartHosting />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
