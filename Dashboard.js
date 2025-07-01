import React, { useState, useEffect } from "react";
import VideoLesson from "../components/VideoLesson";
import Quiz from "../components/Quiz";

const lessons = [
  { title: "Intro to JavaScript", videoUrl: "/videos/js_intro.mp4" },
  { title: "Understanding Variables", videoUrl: "/videos/variables.mp4" },
];

const quizData = [
  {
    question: "What does 'var' declare?",
    options: ["A variable", "A function", "A loop", "A constant"],
    correctIndex: 0,
  },
];

const Dashboard = () => {
  const [score, setScore] = useState(0);

  const handleQuizResult = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome, {localStorage.getItem("user")}</h2>
      <h3 className="text-lg font-semibold mb-2">Your Progress: {score} / {quizData.length}</h3>

      <section>
        {lessons.map((lesson, idx) => (
          <VideoLesson key={idx} {...lesson} />
        ))}
      </section>

      <section>
        {quizData.map((quiz, idx) => (
          <Quiz key={idx} {...quiz} onResult={handleQuizResult} />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
