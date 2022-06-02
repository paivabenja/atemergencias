import React from "react";
import "../styles/QuestionCard.css";

export default function QuestionCard({ img, imgAlt, titulo, subtitulo }) {
  return (
    <div className="card">
      <img src={img} alt={imgAlt} />
      <div>{titulo}</div>
      <div>{subtitulo}</div>
    </div>
  );
}
