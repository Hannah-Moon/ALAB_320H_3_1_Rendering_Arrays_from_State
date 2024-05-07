import React from "react";

const Score = ({ grade }) => {
  return (
    <div>
      <div className="score" style={{ fontSize: "15x" }}>
        <div style={{ color: grade.score >= 80 ? "green" : "red" }}>
          Score: {grade.score}
        </div>
        <hr />
        <div
          style={{
            color: grade.date >= "2019-01-01" ? "red" : "grey",
            fontSize: "10px",
          }}
        >
          {grade.date}
        </div>
      </div>
    </div>
  );
};

export default Score;
