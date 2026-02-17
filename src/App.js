import React from "react";
import "./App.css";
import "./styles.css";
import Search from "./Search";
import Weatherdata from "./Weatherdata";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Search />
      <Weatherdata />
      <Footer />
    </div>
  );
}

export default App;
