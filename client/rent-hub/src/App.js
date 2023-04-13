import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import PropertyPage from "./pages/PropertyPage";
import NoPageFound from "./pages/NoPageFound";
import LandingPage from "./pages/LandingPage";
import ClientsPage from "./pages/ClientsPage";
import ClientPage from "./pages/ClientPage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/properties" element={ <LandingPage /> } />
              <Route path="/properties/:id" element={ <PropertyPage /> } />
                <Route path="/api/clients/:id" element={<ClientPage />} />
                <Route path="/api/clients" element={< ClientsPage />} />
              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
