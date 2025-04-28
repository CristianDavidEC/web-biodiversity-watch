import React from "react";

function Profile({ user }) {
  return (
    <div className="profile-container">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h3>Publicaciones</h3>
      {user.posts && user.posts.length > 0 ? (
        <ul>
          {user.posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> - {post.specie}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes publicaciones</p>
      )}
    </div>
  );
}

export default Profile;
