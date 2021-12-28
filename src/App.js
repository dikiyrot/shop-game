import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
