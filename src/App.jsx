import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}
