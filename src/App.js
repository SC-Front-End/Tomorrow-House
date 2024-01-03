import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./Components/MainPage/MainPage";
import Nav from "./Components/MainPage/Nav";
import Footer from "./Components/MainPage/Footer";
// route
import Login from "./Components/Login/Login";
import BestProductList from "./Components/BestProducts/BestProductList";
import Cart from "./Components/Basket/Cart";
import AdminMain from "./Components/Admin/AdminMain/Admin";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import PaymentDetailGuide from "./Components/Payment/PaymentDetailGuide";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bestproducts" element={<BestProductList />} />
          <Route path="/admin" element={<AdminMain />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentDetailGuide />} />
          <Route path="/productList/:categoryId" element={<ProductList />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
