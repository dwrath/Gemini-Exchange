import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToExchange = () => {
    navigate("/exchange");
  };
  const navigateToUpload = () => {
    navigate("/upload");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={navigateToHome}>Home</button>
      <button onClick={navigateToExchange}>Exchange</button>;
      <button onClick={navigateToUpload}>Upload Data</button>;
    </div>
  );
}

export default Home;
