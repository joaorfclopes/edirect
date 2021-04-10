import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");

  const fetchData = async () => {
    const response = await axios.get("/api");
    setResult(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  );
}

export default App;
