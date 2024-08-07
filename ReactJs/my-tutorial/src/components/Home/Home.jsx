import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home p-4">
      <div className="row g-0 gap-4">
        <div className="col-md-3">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
              <Link to="/digital-clock">Digital Clock</Link>
            </li>
            <li className="list-group-item">
              <Link to="/faq-accordion">FAQ Accordion</Link>
            </li>
            <li className="list-group-item">
            <Link to="/password-generator">Password Generator</Link>
            </li>
          </ul>
        </div>

        <div className="col-md border rounded-2">
          <div className="p-3">
            <h4>React App Installation</h4>
            <pre className="mb-0">
              npm create vite@latest <br />
              npm install
              <br />
              npm run dev
              <br />
              npm i react-router-dom
            </pre>
          </div>

          <hr className="opacity-25 m-0" />
          <div className="p-3">
            <h4>1. Router Setup</h4>
            <ul className="mb-0">
              <li>Route Path</li>
              <li>Route Link</li>
              <li>
                <Link to="/parameters/1">Parameters</Link>
              </li>
              <li>
                Nested Routes - <Link to="/book-category/cat-1">Book-1</Link> /{" "}
                <Link to="/book-category/cat-2">Book-2</Link>
              </li>
              <li>
                Navigating Programmatically - <Link to="/nav-login">Login</Link>
              </li>
            </ul>
          </div>

          <hr className="opacity-25 m-0" />
          <div className="p-3">
            <h4>2. Digital Clock Component</h4>
            <p className="mb-1">Learn how to create a sleek digital clock using React.</p>
            <Link to="/digital-clock">Click here</Link>
          </div>

          <hr className="opacity-25 m-0" />
          <div className="p-3">
            <h4>3. FAQ Accordion</h4>
            <p className="mb-1">Learn how to create a dynamic FAQ accordion component in React from scratch.</p>
            <Link to="/faq-accordion" >Click here</Link>
          </div>

          <hr className="opacity-25 m-0" />
          <div className="p-3">
            <h4>4. Strong Password Generator</h4>
            <p className="mb-1">Learn how to build a powerful password generator application using React.</p>
            <Link to="/password-generator">Click here</Link>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Home;
