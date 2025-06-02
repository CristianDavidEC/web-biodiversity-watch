import React from "react";
import { FaMapMarkerAlt, FaLeaf, FaUserCircle } from "react-icons/fa";

function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No hay publicaciones para mostrar</p>;
  }
  return (
    <div className="posts-list">
      <h2>Publicaciones</h2>
      <div className="feed">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <FaUserCircle className="post-avatar" />
              <span className="post-user">Usuario</span>
              <span className="post-date">· 2024-06-01</span>
            </div>
            <div className="post-content">
              <h3>{post.title}</h3>
              <div className="post-info">
                <span className="post-specie">
                  <FaLeaf /> {post.specie}
                </span>
                <span className="post-location">
                  <FaMapMarkerAlt /> {post.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
