import { useEffect } from 'react';

const DrumPad = ({ drumKey, handleClick, handlePress }) => {
  const drumMap = {
    Q: {
      id: 'Closed HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
    W: {
      id: 'Open HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    E: {
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    A: {
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    S: {
      id: "Kick n' Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    D: {
      id: 'Heater 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    Z: {
      id: 'Heater 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    X: {
      id: 'Heater 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    C: {
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
        'drum-pad bg-blue-500 hover:bg-blue-700 text-white font-bold h-full w-full text-3xl py-4 rounded'
      }
      value={drumMap[drumKey].id}
      onClick={handleClick}
    >
      {drumKey}
      <audio className="clip" id={drumKey} src={drumMap[drumKey].url}></audio>
    </button>
  );
};

export default DrumPad;
