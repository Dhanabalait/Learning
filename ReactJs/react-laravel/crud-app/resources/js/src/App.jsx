import React from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import List from "./pages/List";
import Edit from "./pages/Edit";

export const BASE_URL="http://127.0.0.1:8000";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<List/>}></Route>
                    <Route path="/create" element={<Create/>}></Route>
                    <Route path="/edit/:id" element={<Edit/>}></Route>
                </Routes>
            </HashRouter>
        );
    }
}
const root = createRoot(document.getElementById("app"));
root.render(<App />);
