import React, { useState } from "react";

const Quiz = ({ question, options, correctIndex, onResult }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    onResult(selected === correctIndex);
  };

  return (
    <div className="p-4 border rounded-xl mb-4">
      <h4 className="font-medium mb-2">{question}</h4>
      {options.map((opt, idx) => (
        <button
          key={idx}
          className={`block w-full p-2 mb-2 text-left rounded ${
            selected === idx ? "bg-blue-200" : "bg-gray-100"
          }`}
          onClick={() => setSelected(idx)}
          disabled={submitted}
        >
          {opt}
        </button>
      ))}
      {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Answer
        </button>
      )}
      {submitted && (
        <p className="mt-2">
          {selected === correctIndex ? "✅ Correct!" : "❌ Incorrect."}
        </p>
      )}
    </div>
  );
};

export default Quiz;
