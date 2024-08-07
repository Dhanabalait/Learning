import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginNav() {
  const navigate = useNavigate();
  function login() {
    navigate("/nav-dashboard");
  }
  return (
    <div className="p-4">
      <h2>Navigating Programmatically</h2>
      <button type="button" onClick={login} className="btn btn-primary btn-sm">Login</button>
    </div>
  );
}
