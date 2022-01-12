import { useState, useEffect } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [drumKey, setDrumKey] = useState('');
  const [drumId, setDrumId] = useState('');
  const [display, setDisplay] = useState('');
  const [play, setPlay] = useState(false);

  const drumKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
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

  const handleClick = (e) => {
    setDrumKey(e.target.innerText);
    setDrumId(e.target.id);
    setDisplay(e.target.value);
    setPlay(true);
    console.log(drumKey, drumId, display);
  };

  const handlePress = (e) => {
    if (drumKeys.includes(e.key.toLowerCase())) {
      console.log(e.key.toLowerCase());
      setDrumKey(e.key);
      setDrumId(e.key);
      setDisplay(drumMap[e.key.toUpperCase()].id);
      setPlay(true);
      console.log(drumKey, drumId, display);
    }
  };

  const playAudio = () => {
    const audio = document.querySelector(`#${drumKey.toUpperCase()}`);
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    if (play) {
      playAudio();
      setPlay(false);
    }
  }, [play]);

  return (
    <div id="drum-machine" className="m-6">
      <DrumDisplay drum={display} />
      <DrumPad
        drumKey="Q"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="W"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="E"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="A"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="S"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="D"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="Z"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="X"
        handleClick={handleClick}
        handlePress={handlePress}
      />
      <DrumPad
        drumKey="C"
        handleClick={handleClick}
        handlePress={handlePress}
      />
    </div>
  );
};

export default DrumMachine;
