import React from "react";
import API from "../api/api";

export default function Checkout() {
  const handleCheckout = async () => {
    await API.post("/attendance/check-out");
    alert("You have checked out!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Check Out</button>
    </div>
  );
}
