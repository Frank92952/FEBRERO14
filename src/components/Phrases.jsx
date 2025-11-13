import React from "react";
import "./Phrases.css";

const Phrases = () => {
  const phrases = [
    "Niña, me alegra mucho haberte conocido, contigo las charlas se sienten diferentes.",
    "Que tengas un día lindo, lleno de sonrisas y momentos bonitos.",
    "Cada vez que hablamos descubro cosas nuevas de ti, y eso me encanta.",
    "Ojalá tu día sea tan especial como tú.",
    "Less, sé que eres la mejor y sé que vas a poder con todo… .",
  ];

  return (
    <div className="container">
      <h2>Palabras escritas desde lo más profundo de mi corazón</h2>
      <div className="phrases-container">
        {phrases.map((phrase, index) => (
          <div key={index} className="phrase-card">
            <p>{phrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phrases;
