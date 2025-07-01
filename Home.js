import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-6 text-center">
    <h1 style={{ fontSize: "40px", color: "red" }}>🔥 This is the REAL LearnHub!</h1>


    <p className="mb-4">Your online platform for video lessons and quizzes.</p>
    <Link to="/login">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">Login</button>
    </Link>
  </div>
);

export default Home;
