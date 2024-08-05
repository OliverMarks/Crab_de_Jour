import React from "react";

export default function RoundCounter({ gameState }) {
  const totalRounds = 6; // Assuming there are 6 rounds, adjust as needed

  return (
    <div className="round-counter-container">
        <h3>Round:</h3>
      {Array.from({ length: totalRounds }, (_, index) => {
        const round = index + 1;
        const isActive = gameState.roundNumber === round;
        return (
          <div
            key={round}
            className={`round ${isActive ? 'active' : ''}`}
          >
            {round}
          </div>
        );
      })}
    </div>
  );
}