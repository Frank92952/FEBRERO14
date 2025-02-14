import React from 'react';

const Poems = () => {
  const poems = [
    `En tus ojos encuentro el cielo,
     en tu sonrisa, mi consuelo.
     En tu amor, mi razón de ser,
     contigo quiero siempre crecer.`,
    `El amor es como el viento,
     no puedes verlo, pero puedes sentirlo.
     Y en cada latido de mi corazón,
     sé que eres tú quien lo hace palpitar.`,
  ];

  return (
    <div className="poems">
      <h2>Poemas</h2>
      {poems.map((poem, index) => (
        <pre key={index} className="poem">
          {poem}
        </pre>
      ))}
    </div>
  );
};

export default Poems;