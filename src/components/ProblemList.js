// components/ProblemList.js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ProblemList = () => {
  const [problems, setProblems] = useState([]);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      const querySnapshot = await getDocs(collection(db, "problem_statements"));
      const problemData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProblems(problemData);
    };

    fetchProblems();
  }, []);

  return (
    <div className="problem-list">
      <h2>Problem Statements</h2>
      <button onClick={() => setIsLocked(false)}>Unlock</button>
      {isLocked ? (
        <p>Problem statements will be revealed on February 27th.</p>
      ) : (
        problems.map((problem) => (
          <div key={problem.id} className="problem-card">
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProblemList;
