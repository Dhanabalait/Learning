import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import Parameters from "./components/Parameters/Parameters";
import Book1 from "./components/NestedRoutes/Book1";
import Book2 from "./components/NestedRoutes/Book2";
import LoginNav from "./components/NavigatingProgrammatically/Login";
import DashBoardNav from "./components/NavigatingProgrammatically/Dashboard"
import FAQAccordion from "./components/Accordion/Accordion";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import accordionData from './assets/data/accordion_data.json'
function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parameters/:id" element={<Parameters />} />
            <Route path="/book-category">
              <Route path="cat-1" element={<Book1 />}></Route>
              <Route path="cat-2" element={<Book2 />}></Route>
            </Route>
            <Route path="/digital-clock" element={<DigitalClock />} />
            <Route path="/nav-login" element={<LoginNav/>} />
            <Route path="/nav-dashboard" element={<DashBoardNav/>} />
            <Route path="/faq-accordion" element={<FAQAccordion accordionData={accordionData}/>} />
            <Route path="/password-generator" element={<PasswordGenerator/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
