import React from "react";
import "./Phrases.css";

const Phrases = () => {
  const phrases = [
    "Eres mi razón de ser, mi luz en la oscuridad. Cada momento a tu lado es un regalo del universo.",
    "En tus ojos encuentro el cielo, en tu sonrisa, mi consuelo. Eres mi todo.",
    "El amor no es solo mirarse el uno al otro, es mirar juntos en la misma dirección.",
    "El amor verdadero no se encuentra, se construye con cada mirada, cada gesto y cada promesa cumplida.",
    "Eres la respuesta a todas las preguntas que mi alma nunca supo formular.",
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