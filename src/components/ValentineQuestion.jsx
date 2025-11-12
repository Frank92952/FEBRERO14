import React, { useState, useEffect } from 'react';
import MainScreen from './MainScreen';
import './ValentineQuestion.css'; // Nuevo archivo CSS para animaciones



const ValentineQuestion = () => {
  // Posición inicial para que el botón "No" aparezca junto al "Sí"
  const [position, setPosition] = useState({ x: '50%', y: 0 });
  const [answered, setAnswered] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });
  const [hasMovedOnce, setHasMovedOnce] = useState(false);

  const buttonContainerRef = React.useRef(null);
  const noButtonRef = React.useRef(null);

  useEffect(() => {
    const updateSizes = () => {
      if (buttonContainerRef.current && noButtonRef.current) {
        const container = buttonContainerRef.current.getBoundingClientRect();
        const button = noButtonRef.current.getBoundingClientRect();
        
        setContainerSize({
          width: container.width,
          height: container.height
        });
        
        setButtonSize({
          width: button.width,
          height: button.height
        });
      }
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  const handleNoClick = () => {
    setHasMovedOnce(true);
    const newX = Math.random() * (containerSize.width - buttonSize.width);
    const newY = Math.random() * (containerSize.height - buttonSize.height);
    setPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAnswered(true);
    createHearts();
    createFireworks();
  };

  const createHearts = () => {
    const newHearts = [];
    for (let i = 0; i < 50; i++) {
      const heart = {
        id: i,
        style: {
          left: Math.random() * window.innerWidth,
          top: Math.random() * window.innerHeight,
          animationDuration: `${Math.random() * 3 + 2}s`,
        },
      };
      newHearts.push(heart);
    }
    setHearts(newHearts);
  };

  const createFireworks = () => {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.className = 'fireworks';
    document.body.appendChild(fireworksContainer);
    setTimeout(() => {
      document.body.removeChild(fireworksContainer);
    }, 5000);
  };

  return (
    <div className="valentine-container">
      {!answered ? (
        <>
          <h1 className="valentine-title">Leesly Jhamiley, contigo el plan siempre suena bien.</h1>
          <h1 className="valentine-title">¿Salimos este fin de semana?. SI o NO</h1>
          <div 
            ref={buttonContainerRef}
            className="button-container"
            style={{ position: 'relative', height: '200px', width: '100%', maxWidth: '500px' }}
          >
            <button
              onClick={handleYesClick}
              className="valentine-button yes-button"
            >
              Sí
            </button>
            <button
              ref={noButtonRef}
              style={{
                position: 'absolute',
                left: hasMovedOnce ? `${position.x}px` : position.x,
                top: hasMovedOnce ? `${position.y}px` : 0,
                transform: hasMovedOnce ? 'none' : 'translateX(20px)',
                transition: 'all 0.2s ease'
              }}
              onClick={handleNoClick}
              className="valentine-button no-button"
            >
              No
            </button>
          </div>
        </>
      ) : (
        <MainScreen />
      )}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={heart.style}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default ValentineQuestion;