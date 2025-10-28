import React, { useState, useEffect, useMemo } from "react";

const PoliticianCard = React.memo(({ name, image, position, biography }) => {
  console.log("Card");
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        <strong>Posizione:</strong> {position}
      </p>
      <p>{biography}</p>
    </div>
  );
});

function App() {
  const [politicians, setPoliticians] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then((response) => response.json())
      .then((data) => setPoliticians(data))
      .catch((error) => console.error(error));
  }, []);

  const positions = useMemo(() => {
    const uniquePositions = [];
    politicians.forEach((politician) => {
      if (!uniquePositions.includes(politician.position)) {
        uniquePositions.push(politician.position);
      }
    });
    return uniquePositions;
  }, [politicians]);

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((politicians) => {
      const IsInName = politicians.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const IsInBio = politicians.biography
        .toLowerCase()
        .includes(search.toLowerCase());
      const IsPositionValid =
        selectedPosition === "" || politicians.position === selectedPosition;
      return (IsInName || IsInBio) && IsPositionValid;
    });
  }, [politicians, search, selectedPosition]);

  return (
    <>
      <div className="header-container">
        <h1>Lista politici</h1>
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
        >
          <option value="">Tutte le posizioni</option>
          {positions.map((position, index) => (
            <option key={index} value={position}>
              {position}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Cerca politico..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="politicians-list">
        {filteredPoliticians.map((politician) => (
          <PoliticianCard key={politician.id} {...politician} />
        ))}
      </div>
    </>
  );
}

export default App;
