import React, { useState } from "react";
import Posts from "./Posts";
import Map from "./Map";

function Home({ user, isAdmin }) {
  const [search, setSearch] = useState("");

  // Mock posts (en una app real vendrían de props o contexto)
  const posts = [
    {
      id: 1,
      title: "Avistamiento de cóndor",
      specie: "Cóndor Andino",
      location: "Nevado del Ruiz",
    },
    {
      id: 2,
      title: "Orquídea silvestre",
      specie: "Orquídea",
      location: "Valle de las Tumbas",
    },
    {
      id: 3,
      title: "Frailejón gigante",
      specie: "Frailejón",
      location: "Laguna del Otún",
    },
  ];

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.specie.toLowerCase().includes(search.toLowerCase()) ||
      post.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-bg">
      <div className="main-columns">
        <div className="posts-column">
          <h2>Bienvenido, {user.name}</h2>
          {isAdmin && (
            <div className="admin-panel">
              <h3>Panel de administración</h3>
            </div>
          )}
          <div className="search-bar-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Buscar especie, ubicación o título..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Posts posts={filteredPosts} />
        </div>
        <div className="map-side">
          <Map posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
