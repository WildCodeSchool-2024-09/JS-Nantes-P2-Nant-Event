import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "../styles/BodyUser.css";

function BodyUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  if (localStorage.getItem("username")) {
    navigate("/FavoritePage");
  }

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");

    if (savedUsername) {
      setUsername(savedUsername);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    navigate("/FavoritePage");
  };

  return (
    <>
      <section className="body-user">
        <div className="user-card">
          <h2>Inscription</h2>
          <form className="form-user" onSubmit={handleSubmit}>
            <p>Votre prénom</p>

            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <p>Votre e-mail</p>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Soumettre</button>
          </form>
        </div>
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default BodyUser;
