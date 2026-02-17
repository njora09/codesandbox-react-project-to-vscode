import React from "react";
import "./App.css";
import "./styles.css";
import Search from "./Search";
import Weatherdata from "./Weatherdata";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="noras-meteo-app">
        <Search />
        <main>
          <Weatherdata />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
