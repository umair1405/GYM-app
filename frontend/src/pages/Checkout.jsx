import React from "react";

import API from "../api/api";

export default function Checkout() {
  const finish = async () => {
    const attendanceId = localStorage.getItem("attendance_id");
    await API.post(`/attendance/checkout?attendance_id=${attendanceId}`);
    alert("Checked out successfully");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Finish Workout</h2>
      <button onClick={finish}>Check Out</button>
    </div>
  );
}
