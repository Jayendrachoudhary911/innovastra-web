import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { forwardRef } from "react";

const LiveUpdates = forwardRef((props, ref) => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const querySnapshot = await getDocs(collection(db, "updates"));
      setUpdates(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchUpdates();
  }, []);

  return (
    <section ref={ref} id="live-updates">
      <h2>Live Updates</h2>
      {updates.length === 0 ? <p>Loading...</p> : updates.map((update, index) => (
        <div key={index} className="update-card">
          <h3>{update.title}</h3>
          <p>{update.description}</p>
        </div>
      ))}
    </section>
  );
});

export default LiveUpdates;
