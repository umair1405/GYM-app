import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

export default function WorkoutDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    API.get(`/workout/exercises/${id}`)
      .then((res) => setExercises(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!exercises.length) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Exercises</h2>

      {exercises.map((ex) => (
        <div key={ex.id} style={{ marginBottom: 20 }}>
          <h3>{ex.name}</h3>

          <img
            src={`http://127.0.0.1:8000/images/${ex.image}`}
            width="250"
            alt={ex.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/gymphoto.jpg"; // frontend fallback
            }}
          />

          <p>{ex.description}</p>
        </div>
      ))}

      <button onClick={() => nav("/checkout")}>
        Finish Workout
      </button>
    </div>
  );
}
