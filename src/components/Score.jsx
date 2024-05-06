import React from "react";

const Score = ({ grade }) => {
  return (
    <div className="score">
      <div className="gradedDate">Date: {grade.date}</div>
      <div className="gradedScore">Score: {grade.score}</div>
    </div>
  );
};

export default Score;
