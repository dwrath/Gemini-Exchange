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
      <main className="exchange grid">
        <section className="exchange__section--left grid">
          {/* Markets */}

          {/* Balance */}

          {/* Order */}
        </section>
        <section className="exchange__section--right grid">
          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}
        </section>
      </main>
      {/* Alert */}
    </div>
  );
}

export default Home;
