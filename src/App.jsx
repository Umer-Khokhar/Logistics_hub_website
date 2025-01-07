import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar, Optimize, Footer, ScrollToTop } from "./components";
import { Home, Contact, Faq, ServicesPage, About } from "./pages";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/contact-us"} element={<Contact />}/>
          <Route path={"/FAQ"} element={<Faq />} />
          <Route path={"/Services"} element={<ServicesPage />} />
          <Route path={"/about-us"} element={<About />} />
        </Routes>
        <Optimize />
        <Footer />
    </Router>
  );
};

export default App;
