import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AddProductForm from "./components/AddProductForm";
import ProductEdit from "./components/ProductEdit";
import MyProductList from "./components/MyproductList";
import { useState } from "react";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductList searchTerm={searchTerm} />}
        />
        <Route exact path="/products/:id" element={<ProductDetails />} />
        <Route exact path="/productsform/:id" element={<AddProductForm />} />
        <Route exact path="/edit-product/:id" element={<ProductEdit />} />
        <Route
          exact
          path="/myProduct"
          element={<MyProductList searchTerm={searchTerm} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
