import React from "react";
import "../styles/QuestionCard.css";

export default function QuestionCard({ img, imgAlt, titulo, subtitulo }) {
  return (
    <div className="card">
      <div>
        <img src={img} alt={imgAlt} />
      </div>
      <div>{titulo}</div>
      <div>{subtitulo}</div>
    </div>
  );
}
