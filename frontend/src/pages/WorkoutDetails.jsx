import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

export default function WorkoutDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    API.get(`/workout/${id}`).then((res) => setWorkout(res.data));
  }, []);

  if (!workout) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{workout.name}</h2>

      <img src={workout.photo_url} width="250" />

      <p>{workout.description}</p>

      <button onClick={() => nav("/checkout")}>Finish Workout</button>
    </div>
  );
}
