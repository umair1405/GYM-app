import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function CheckIn() {
  const nav = useNavigate();


const checkIn = async () => {
  const userId = 1; // get this from auth / context / localStorage
  const res = await API.post(`/attendance/checkin?user_id=${userId}`);

  localStorage.setItem("attendance_id", res.data.attendance_id);
  nav("/workouts");
};
  return (
    <div style={{ padding: 20 }}>
      <h2>Mark Attendance</h2>
      <button onClick={checkIn}>Check In</button>
    </div>
  );
}
