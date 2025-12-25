// frontend/src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/auth/register", {
        email,
        password,
      });
      alert("Account created successfully");
      nav("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>

      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: 10 }}>
        Already have an account?{" "}
        <Link to="/" style={styles.link}>
          Sign In
        </Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 350,
    margin: "100px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 6,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};
