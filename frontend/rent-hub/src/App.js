import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import PropertyPage from "./pages/PropertyPage";
import NoPageFound from "./pages/NoPageFound";
import LandingPage from "./pages/LandingPage";
import GetClients from "./pages/GetClients";
import GetClient from "./pages/GetClient";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/properties" element={ <LandingPage /> } />
              <Route path="/properties/:id" element={ <PropertyPage /> } />
                <Route path="/api/clients/:id" element={<GetClient />} />
                <Route path="/api/clients" element={<GetClients />} />
              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
