import { BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import PropertyPage from "./pages/PropertyPage";
import NoPageFound from "./components/NoPageFound";
import LandingPage from "./pages/LandingPage";


function App() {
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
