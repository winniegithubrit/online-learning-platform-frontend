import React, { useState, useEffect } from "react";

function Home() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/grades")
      .then((response) => response.json())
      .then((data) => setGrades(data))
      .catch((error) => console.error("Error fetching grades:", error));
  }, []);

  return (
    <div>
      <h1>Available Grades</h1>
      <div className="grade-list">
        {grades.map((grade) => (
          <div key={grade.id} className="grade">
            <img src={grade.image} alt={grade.name} />
            <h2>{grade.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
