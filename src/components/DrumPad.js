import { useEffect } from 'react';

const DrumPad = ({ drumKey, handleClick, handlePress }) => {
  const drumMap = {
    q: {
      id: 'Closed HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
    w: {
      id: 'Open HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    e: {
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    a: {
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    s: {
      id: "Kick n' Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    d: {
      id: 'Heater 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    z: {
      id: 'Heater 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    x: {
      id: 'Heater 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    c: {
      id: 'Heater 4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
  };

  useEffect(() => {
    document.addEventListener('keydown', handlePress);
    return () => {
      document.removeEventListener('keydown', handlePress);
    };
  }, []);

  return (
    <button
      id={drumMap[drumKey].id.replaceAll(' ', '-').replaceAll("'", '')}
      className={
        'drum-pad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded'
      }
      value={drumMap[drumKey].id}
      onClick={handleClick}
    >
      {drumKey.toUpperCase()}
      <audio className="clip" id={drumKey} src={drumMap[drumKey].url}></audio>
    </button>
  );
};

export default DrumPad;
