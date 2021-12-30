import React, { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./UserCard";

export interface Rank {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

let data: Rank[] = [
  {
    userID: "u-1",
    displayName: "Jone",
    picture: "",
    score: 0
  },
  {
    userID: "u-2",
    displayName: "Victoria",
    picture: "",
    score: 0
  },
  {
    userID: "u-3",
    displayName: "Joy",
    picture: "",
    score: 0
  },
  {
    userID: "u-4",
    displayName: "Quinn",
    picture: "",
    score: 0
  },
  {
    userID: "u-5",
    displayName: "Sheenalo",
    picture: "",
    score: 0
  },
  {
    userID: "u-6",
    displayName: "Charlene",
    picture: "",
    score: 0
  },
  {
    userID: "u-7",
    displayName: "LeonaBaby",
    picture: "",
    score: 0
  },
  {
    userID: "u-8",
    displayName: "Sunny",
    picture: "",
    score: 0
  },
  {
    userID: "u-9",
    displayName: "ImWord",
    picture: "",
    score: 0
  },
  {
    userID: "u-10",
    displayName: "Dophine",
    picture: "",
    score: 0
  }
];

function App() {
  const [score, setScore] = useState(data);

  function randomNum(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const updateData = (data: Rank[]) => {
    const newScore = data.map((e: Rank) => {
      e.score = e.score + randomNum(1000, 5000);
      return e;
    });
    return newScore;
  };

  useEffect(() => {
    setInterval(() => {
      data = updateData(data);
      data.sort((a, b) => b.score - a.score);
      setScore([...data]);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {score.map((e, i) => (
        <UserCard no={i} key={e.userID} scoreData={e} />
      ))}
    </div>
  );
}

export default App;
