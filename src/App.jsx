import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./component/Category";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import BestSeller from "./component/BestSeller";
import Footer from "./component/Footer";
import Women from "./pages/Women";
import Men from "./Pages/Men";
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
              <BestSeller />
              <Footer />
            </>
          }
        />

        {/* Women */}
        <Route path="/women" element=
         <>
              
              <Women />
              <Footer />
            </>
        
        />


        <Route path="/Men" element=
         <>
              
              <Men />
              <Footer />
            </>
        
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;