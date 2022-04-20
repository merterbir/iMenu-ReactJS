import React from "react";

import { Routes, Route } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";

import {SuperVisibleProvider} from "./contexts/SuperVisibleContext";
import Login from "./loginpage/Login";
import SuperAdminCall from "./SuperAdminPages/SuperAdminCall";
import { ApiProvider } from "./contexts/ApiContext";


function App() {

  return (
    <div className="App">




      <Routes>

        <Route path="/" element={<Anasayfa />} />
        <Route path="/SuperAdmin" element={<SuperVisibleProvider><ApiProvider><SuperAdminCall /></ApiProvider></SuperVisibleProvider>} />
        <Route path="/Login" element={<ApiProvider><Login /></ApiProvider>} />

      </Routes>
     




    </div>
  );
}

export default App;
