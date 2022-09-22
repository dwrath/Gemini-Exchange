import React from "react";
import logo from "../assets/gemini4.webp";
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
      <main className="main">
        <div className="topContainer">
          <div>
            <img src={logo} className="geminiLogo" alt="logo"></img>
            <h1 className="title">Welcome to the Gemini Exchange</h1>
          </div>
          <p className="directions">
            Click Upload Data to upload documents or click Exchange to go to the
            Trading Exchange
          </p>
        </div>
        <div className="btnContainer">
          <button className="btn" onClick={navigateToHome}>
            Home
          </button>
          <button className="btn" onClick={navigateToUpload}>
            Upload Data
          </button>
          <button className="btn" onClick={navigateToExchange}>
            Exchange
          </button>
        </div>
      </main>
      {/* Alert */}
    </div>
  );
}

export default Home;
