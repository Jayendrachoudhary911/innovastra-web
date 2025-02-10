import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Countdown from "../components/Countdown";
import { forwardRef } from "react";
import "../styles/Problemstate.css";

const ProblemStatements = forwardRef((props, ref) => {
  const [problems, setProblems] = useState([]);
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state

  // Function to fetch problems from Firestore
  const fetchProblems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "problems"));
      const problemsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProblems(problemsList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching problems:", error);
      setLoading(false);
    }
  };

  // Fetch problems only when the timer completes
  useEffect(() => {
    if (timerCompleted) {
      fetchProblems();
    }
  }, [timerCompleted]);

  return (
    <section ref={ref} id="problem-statements">
      <div className="pronite-container">
        <h1 className="title">Problem Statements</h1>

        {/* Before timer ends, show placeholder cards */}
        {!timerCompleted ? (
          <>
            <div className="cards-container">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
            <h2>in</h2>
            <Countdown
              eventDate="2025-02-28T11:00:00"
              onComplete={() => setTimerCompleted(true)}
            />
          </>
        ) : (
          // After timer ends, show problems
          <div className="problems-container">
            {loading ? (
              <p>Loading problems...</p>
            ) : problems.length > 0 ? (
              problems.map((problem) => (
                <div key={problem.id} className="problem-card">
                  <h2>{problem.title}</h2>
                  <p>{problem.description}</p>
                </div>
              ))
            ) : (
              <p>No problem statements available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
});

export default ProblemStatements;
