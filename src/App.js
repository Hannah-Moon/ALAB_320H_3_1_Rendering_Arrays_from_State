import React, { useState } from "react";
import "./App.css";
import { learnersData } from "./models/learners"; // Correct import name
import Learner from "./components/Learner";

function App() {
  const [learnerData, setLearnerData] = useState(learnersData); // Use correct import name

  const [user, setUser] = useState({
    isLoggedIn: true,
    status: "hidden",
    content: null,
    active: true,
  });

  const updateState = () => {
    setUser((user) => ({
      ...user,
      status: "visible",
    }));
  };

  const updateMultiple = () => {
    setUser((user) => ({
      ...user,
      status: "visible",
      content: "new Updated Content",
    }));
  };

  const addLearner = () => {
    let instructor = {
      photo:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJeZIThDjAfoSa4tzLwHDrx-xzp1Ye6Dd8AFhLoJqUzfRZS7da",
      name: "Jisoo Kim",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
      scores: [
        {
          date: "2018-02-08",
          score: 177,
        },
        {
          date: "2018-04-22",
          score: 192,
        },
        {
          date: "2018-09-15",
          score: 168,
        },
      ],
    };
    setLearnerData([...learnerData, instructor]);
  };

  return (
    <div className="App">
      {learnerData.map((learner, index) => (
        <Learner key={index} data={learner} photo={learner.photo} />
      ))}
      <div className="btnContainer">
        <button className="btn1" onClick={updateState}>
          Update State
        </button>
        <button className="btn2" onClick={updateMultiple}>
          Multiple
        </button>
        <button className="btn3" onClick={addLearner}>
          Add Learner
        </button>
        <button className="btn4">Replace Obj</button>
      </div>
    </div>
  );
}

export default App;
