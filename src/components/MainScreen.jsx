import React, { useState, useEffect } from "react";
import { FaMusic, FaHeart, FaQuoteLeft} from "react-icons/fa";
import MusicPlayer from "./MusicPlayer";
import Gifts from "./Gifts";
import Phrases from "./Phrases";
import Poems from "./Poems";
import "./MainScreen.css"; // Asegúrate de importar los estilos

const MainScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hearts, setHearts] = useState([]);

  // Generar corazones flotantes
  useEffect(() => {
    const createHearts = () => {
      let newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100 + "vw",
          animationDuration: Math.random() * 5 + 5 + "s",
        });
      }
      setHearts(newHearts);
    };
    createHearts();
  }, []);

  return (
    <div className="main-screen">
      {/* Corazones flotando */}
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
          }}
        />
      ))}

      <h1 className="main-title">💖 ¡Sabía que me ibas a elegir a mí! 💖</h1>

      <div className="options-container">
        <button onClick={() => setSelectedOption("music")} className="option-button">
          <FaMusic className="icon" /> Música
        </button>

        <button onClick={() => setSelectedOption("phrases")} className="option-button">
          <FaQuoteLeft className="icon" /> Frases
        </button>
 
      </div>

      {/* Mostrar contenido según la opción seleccionada */}
      {selectedOption === "music" && <MusicPlayer />}
      {selectedOption === "gifts" && <Gifts />}
      {selectedOption === "phrases" && <Phrases />}
      {selectedOption === "poems" && <Poems />}
    </div>
  );
};

export default MainScreen;
