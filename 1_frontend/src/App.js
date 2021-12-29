import React from "react";
import "./App.css";

// components
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
