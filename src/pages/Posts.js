import React from "react";

function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No hay publicaciones para mostrar</p>;
  }
  return (
    <div className="posts-list">
      <h2>Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.specie} ({post.location})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
