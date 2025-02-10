// components/AddProblem.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "problem_statements"), { title, description });
      alert("Problem statement added!");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding problem statement:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-problem-form">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Add Problem</button>
    </form>
  );
};

export default AddProblem;
