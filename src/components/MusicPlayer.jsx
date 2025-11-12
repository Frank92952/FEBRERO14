import React, { useState } from "react";
import YouTube from "react-youtube";

const MusicPlayer = () => {
  const musicList = [
    { name: "Canción 1 (YouTube)", url: "0-p5EbAsxUM" }, // Solo el ID del video
    { name: "Canción 2 (MP3)", url: "pCSL48AI_Ms" },
    { name: "Canción 3 (MP3)", url: "s1SoluK0Imk" },
  ];

  const [currentSong, setCurrentSong] = useState(musicList[0].url);
  const [isYouTube, setIsYouTube] = useState(true); // Para saber si es YouTube o MP3

  const opts = {
    height: "200",
    width: "350",
    playerVars: {
      autoplay: 1, // Se reproduce automáticamente al cambiar de canción
    },
  };

  return (
    <div className="music-player" style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>🎵 Elige una Música</h2>

      {isYouTube ? (
        <YouTube videoId={currentSong} opts={opts} />
      ) : (
        <audio controls autoPlay>
          <source src={currentSong} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      )}

      <div style={{ marginTop: "20px" }}>
        {musicList.map((song, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSong(song.url);
              setIsYouTube(song.url.includes("youtube") ? true : song.url.length === 11); // Si es ID de YouTube, lo toma como video
            }}
            style={{
              margin: "10px",
              padding: "10px",
              background: "#ff4d6d",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            {song.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
