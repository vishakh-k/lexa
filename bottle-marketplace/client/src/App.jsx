import React from "react";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Bottle Shop
        </h1>
      </main>
    </div>
  );
}

export default App;
