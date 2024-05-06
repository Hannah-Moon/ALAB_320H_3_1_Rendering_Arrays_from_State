import React from "react";
import "./App.css";
import { learnersData } from "./models/learners";
import Learner from "./components/Learner";

const App = () => {
  return (
    <div className="App">
      {learnersData.map((student, index) => {
        return <Learner data={student} key={index} />;
      })}
    </div>
  );
};

export default App;
