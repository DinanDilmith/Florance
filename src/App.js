import React, { useState, useEffect } from "react";
import LandingPage from "./Sections/LandingPage";
import Loading from "./Components/Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navibar from "./Components/Navibar";
import AboutUs from "./Sections/AboutUs";
import DeliveryInfo from "./Sections/DeliveryInfo";
import ContactUs from "./Sections/ContactUs";
import Footer from "./Components/Footer";
import ScrollToTop from "./Hooks/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>

      <ScrollToTop /> {/* reset scroll position*/}

      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navibar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/DeliveryInfo" element={<DeliveryInfo />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
