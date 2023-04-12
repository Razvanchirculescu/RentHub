import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import PropertyPage from "./pages/PropertyPage";
import NoPageFound from "./components/NoPageFound";
import LandingPage from "./pages/LandingPage";
import React from "react";
import './App.css';
import GetClients from "./pages/GetClients";
import GetClient from "./pages/GetClient";
import TestGetClients from "./pages/TestGetClients";
import Test from "./components/Test"
import Test2 from "./components/Test2"
import PropertyPage from "./pages/PropertyPage";
import NoPageFound from "./components/NoPageFound";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import CategoryGrid from "./components/CategoryGrid";
import GetPropertyList from "./components/GetPropertyList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Routes>
                  <Route path="/api/clients/:id" element={<GetClient />} />
                  {/*<Route path="/api/clients" element={<TestGetClients />} />*/}
                  <Route path="/api/clients" element={<GetClients />} />
                  <Route path="/properties/:id" element={ <PropertyPage /> } />
                  <Route path="*" element={<NoPageFound />} />
              </Routes>
          </Router>
        {/*<GetClient />*/}
        {/*<Test />*/}
        {/*<Test2 />*/}
      </header>
    </div>
  );
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/properties" element={ <LandingPage /> } />
              <Route path="/properties/:id" element={ <PropertyPage /> } />
              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
