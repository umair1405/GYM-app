import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function WorkoutSelect() {
  const [workouts, setWorkouts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    API.get("/workout/all").then((res) => setWorkouts(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Select Workout</h2>

      {workouts.map((w) => (
        <div key={w.id}>
          <button onClick={() => nav(`/workouts/${w.id}`)}>
            {w.name}
          </button>
          <br /><br />
        </div>
      ))}
    </div>
  );
}
