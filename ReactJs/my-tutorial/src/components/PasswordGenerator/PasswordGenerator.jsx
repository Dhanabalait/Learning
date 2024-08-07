import React, { useState } from "react";
import "./PasswordGenerator.css";
import { Link } from "react-router-dom";

export const PasswordGenerator = () => {
  const [passLength, setPassLength] = useState(8);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [num, setNum] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (num) charset += "0123456789";
    if (symbol) charset += "!@#$%^&*()_=+";
    let generatedPassword = "";
    if (charset) {
      for (let i = 0; i < passLength; i++) {
        const randIndex = Math.floor(Math.random() * charset.length);
        generatedPassword += charset[randIndex];
      }
      setPassword(generatedPassword);
    } else {
      alert("Please select at least of one option!");
    }
  };

  const copyToPassword = (e) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="pass-generator-container">
      <div className="password-generator">
        <h4 className="text-center mb-3">Password Generator</h4>
        <div className="form-group mb-3">
          <label htmlFor="passLength" className="form-label">
            Password Length
          </label>
          <input
            type="number"
            name="passLength"
            id="passLength"
            value={passLength}
            onChange={(e) => {
              setPassLength(parseInt(e.target.value));
            }}
            className="form-control"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="upper"
            checked={upper}
            onChange={(e) => {
              setUpper(e.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="upper">
            Uppercase
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="lower"
            checked={lower}
            onChange={(e) => {
              setLower(e.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="lower">
            Lowercase
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="num"
            checked={num}
            onChange={(e) => {
              setNum(e.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="num">
            Numbers
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="symbol"
            checked={symbol}
            onChange={(e) => {
              setSymbol(e.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="symbol">
            Symbol
          </label>
        </div>

        <button
          onClick={generatePassword}
          type="button"
          className="btn btn-success w-100"
        >
          Generate Password
        </button>
        <div className={`input-group mt-3 ${password ? "d-flex" : "d-none"}`}>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
            value={password}
          />
          <button
            onClick={copyToPassword}
            type="button"
            className="btn btn-outline-secondary"
          >
            <i className="bi bi-clipboard"></i>
          </button>
        </div>
      </div>
      <div className="mt-3">
      <Link to="/" className="text-primary">Home</Link>
    </div>
    </div>
  );
};
export default PasswordGenerator;
