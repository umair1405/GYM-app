import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function CheckIn() {
  const nav = useNavigate();

  const checkIn = async () => {
    await API.post("/attendance/check-in");
    nav("/workouts");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Mark Attendance</h2>
      <button onClick={checkIn}>Check In</button>
    </div>
  );
}
