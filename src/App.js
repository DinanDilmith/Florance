import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Loading from "./Components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <LandingPage />}
    </div>
  );
}

export default App;

