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
import Accessory from "./Pages/Accessory";
import About from "./component/About";
import Kid from "./Pages/Kid";
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
              
            </>
          }
        />

        {/* Women */}
        <Route path="/women" element=
         <>
              
              <Women />
            
            </>
        
        />


        <Route path="/Men" element=
         <>
              
              <Men />
              
            </>
        
        />

 <Route path="/Kid" element=
         <>
              
              <Kid />
              
            </>
        
        />



         <Route path="/Accessory" element=
         <>
              
              <Accessory />
              
            </>
        
        />

<Route path="/About" element=
         <>
              
              <About />
              
            </>
        
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;