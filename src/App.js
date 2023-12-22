import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import Nav from './Components/MainPage/Nav';
import Footer from './Components/MainPage/Footer';
import Empty from "./Components/Basket/Empty";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/empty' element={<Empty />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;