import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import Nav from './Components/MainPage/Nav';
import Footer from './Components/MainPage/Footer';
// route
import Login from "./Components/Login/Login";
import BestProductList from "./Components/BestProducts/BestProductList";
import Cart from "./Components/Basket/Cart";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<BestProductList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;