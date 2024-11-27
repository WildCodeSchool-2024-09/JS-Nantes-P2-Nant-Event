import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
/* import { useNavigate, useOutletContext } from "react-router-dom";*/
import "../styles/BodyUser.css";

function BodyUser() {
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
  });

  //const navigate = useNavigate();//

  // const { counter, setCounter } = useOutletContext() as any;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.warn(dataUser);
    /*navigate("/");*/
  }

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
              value={dataUser.username}
              onChange={handleChange}
            />

            <p>Votre e-mail</p>

            <input
              type="email"
              name="email"
              value={dataUser.email}
              onChange={handleChange}
            />
            <button type="submit">Soumettre</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BodyUser;
