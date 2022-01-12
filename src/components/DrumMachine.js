import { useState, useEffect } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [drumKey, setDrumKey] = useState('');
  const [display, setDisplay] = useState('');
  const [play, setPlay] = useState(false);

  const drumKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
  const drumLabels = {
    Q: 'Closed HH',
    W: 'Open HH',
    E: 'Clap',
    A: 'Kick',
    S: "Kick n' Hat",
    D: 'Heater 1',
    Z: 'Heater 2',
    X: 'Heater 3',
    C: 'Heater 4',
  };

  const handleClick = (e) => {
    setDrumKey(e.target.innerText);
    setDisplay(e.target.value);
    setPlay(true);
  };

  const handlePress = (e) => {
    if (drumKeys.includes(e.key.toLowerCase())) {
      setDrumKey(e.key);
      setDisplay(drumLabels[e.key.toUpperCase()]);
      setPlay(true);
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
