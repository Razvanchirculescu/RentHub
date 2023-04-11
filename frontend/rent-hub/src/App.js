import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import CategoryGrid from "./components/CategoryGrid";
import GetPropertyList from "./components/GetPropertyList";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <CategoryGrid/>
            <GetPropertyList/>
        </div>
    );
}

export default App;
