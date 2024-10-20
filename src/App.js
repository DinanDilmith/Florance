import React, { useState, useEffect } from "react";
import LandingPage from "./Sections/LandingPage";
import Loading from "./Components/Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navibar from "./Components/Navibar";
import AboutUs from "./Sections/AboutUs";

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
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navibar />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/About" element={<AboutUs/>} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
