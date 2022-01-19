import React from "react";
import QuetesList from "../components/Quetes/QuetesList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQuetes = () => {
  return <QuetesList quates={DUMMY_QUOTES} />;
};

export default AllQuetes;
