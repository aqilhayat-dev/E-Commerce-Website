import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Category from "./component/Category";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import Bestseller from "./component/Bestseller";
import Footer from "./component/Footer";
import About from "./component/About";
import OfferBanner from "./component/OfferBanner";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Kid from "./Pages/Kid";
import Accessory from "./Pages/Accessory";

import ProductDetails from "./component/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Hero2 />
              <Category />
              <Bestseller />
            </>
          }
        />

        {/* Women */}
        <Route
          path="/women"
          element={<Women />}
        />

        {/* Men */}
        <Route
          path="/Men"
          element={<Men />}
        />

        {/* Kids */}
        <Route
          path="/Kid"
          element={<Kid />}
        />

        {/* Accessories */}
        <Route
          path="/Accessory"
          element={<Accessory />}
        />

        {/* About */}
        <Route
          path="/About"
          element={<About />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

      </Routes>
      <OfferBanner />

      <Footer />

    </BrowserRouter>
  );
};

export default App;