import React from "react";
import './App.css';
import GetClients from "./components/GetClients";
import GetClient from "./components/GetClient";
import Test from "./components/Test"
import Test2 from "./components/Test2"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

function Home() {
    return null;
}

// import { GetClient } from "./api/clients";
import React from "react";
import Navbar from "./components/Navbar";
import CategoryGrid from "./components/CategoryGrid";
import GetPropertyList from "./components/GetPropertyList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Routes>
                  {/*<Route path="http://localhost:8080/api/clients/1" element={<GetClient />} />*/}
                  <Route path="/api/clients/:id" element={<GetClient />} />
                  {/*<Route path="/api/clients/2" element={<GetClient />} />*/}
                  {/*<Route path="/api/clients/:id" component={GetClient} />*/}
                  {/*<Route path="/api/clients/2" component={GetClient} />*/}
                  {/*<Route path="http://localhost:8080/api/clients/:id" component={GetClient} />*/}
              </Routes>
          </Router>
        {/*<GetClient />*/}
        {/*<Test />*/}
        {/*<Test2 />*/}
      </header>
    </div>
  );
}

export default App;
