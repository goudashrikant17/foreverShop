import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Searchbar from "./Components/Searchbar";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
     <Searchbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/collection" Component={Collection} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/product/:productId" Component={Product} />
        <Route path="/cart" Component={Cart} />
        <Route path="/login" Component={Login} />
        <Route path="/place-order" Component={PlaceOrder} />
        <Route path="/orders" Component={Orders} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
