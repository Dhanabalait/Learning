import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import AppDownload from "./components/AppDownload";
import LoginModal from "./components/LoginModal/LoginModal";

export const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="app">
      {showLogin ? <LoginModal setShowLogin={setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <AppDownload />
      <Footer />
    </div>
  );
};
export default App;
