import { useState, useEffect } from "react";

function App() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((response) => response.json())
      .then((data) => setPoliticians(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <h1>Lista politici</h1>
      </div>
      <div className="politicians-list">
        {politicians.map((politician) => (
          <div className="card" key={politician.id}>
            <img src={politician.image} alt={politician.name} />
            <h2>{politician.name}</h2>
            <p>
              <strong>Posizione:</strong> {politician.position}
            </p>
            <p>{politician.biography}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
