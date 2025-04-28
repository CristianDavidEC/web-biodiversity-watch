import React, { useState } from "react";

function SearchSpecies({ species }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const filtered = species.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="search-species-container">
      <input
        type="text"
        placeholder="Buscar especie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {searched && results.length === 0 && <p>No se encontraron especies</p>}
      <ul>
        {results.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchSpecies;
