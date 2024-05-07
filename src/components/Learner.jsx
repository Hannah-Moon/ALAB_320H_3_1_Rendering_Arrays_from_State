import React from "react";
import Score from "./Score";

const Learner = ({ data, photo }) => {
  return (
    <div className="dashBaord">
      <div className="studentContainer">
        <div className="pictureCard">
          <img src={photo} alt={data.name} className="learnerPicture" />
        </div>
        <div className="studentCard">
          <h2 className="nameTile">{data.name}</h2>
          <p className="bioTile">{data.bio}</p>
        </div>
        <div className="scoreCard">
          {data.scores.map((score, index) => {
            return <Score grade={score} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Learner;
