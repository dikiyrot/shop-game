import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux";
import { GamePage } from "./pages/GamePage";
import { OrderPage } from "./pages/OrderPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/shop-game/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
