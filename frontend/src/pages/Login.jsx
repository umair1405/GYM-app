// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/login", {
        email,
        password,
      });

      console.log("login success", res.data);
      localStorage.setItem("user_id", res.data.user_id);
      nav("/checkin"); // or dashboard
    } catch (err) {
      alert(err?.response?.data?.detail || "Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
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

        <button type="submit">Sign In</button>
      </form>

      <p style={{ marginTop: 10 }}>
        Don’t have an account?{" "}
        <Link to="/register" style={styles.link}>
          Create Account
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
