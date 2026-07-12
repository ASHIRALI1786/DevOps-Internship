import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error: " + error.message);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 DevOps Internship Project</h1>
      <h2>{message}</h2>
      <p>React + FastAPI + Docker + Kubernetes</p>
    </div>
  );
}

export default App;