import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // got this from react toastify webiste

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000"; // url of the api

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<List url={url} />}></Route>
          <Route path="/add" element={<Add url={url} />}></Route>
          <Route path="/list" element={<List url={url} />}></Route>
          <Route path="/orders" element={<Orders url={url} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
