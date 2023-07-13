import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import MyCart from "./components/Mycart";
import Home from "./components/Home";
import Categoires from "./components/Categoires";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoires" element={<Categoires />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/login" element={<Login />} />{" "}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
