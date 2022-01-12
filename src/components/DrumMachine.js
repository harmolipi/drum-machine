import { useState, useEffect } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [drumKey, setDrumKey] = useState('');
  const [display, setDisplay] = useState('Press a button!');
  const [play, setPlay] = useState(false);

  const drumKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
  const drumLabels = {
    q: 'Closed HH',
    w: 'Open HH',
    e: 'Clap',
    a: 'Kick',
    s: "Kick n' Hat",
    d: 'Heater 1',
    z: 'Heater 2',
    x: 'Heater 3',
    c: 'Heater 4',
  };

  const handleClick = (e) => {
    setDrumKey(e.target.innerText.toLowerCase());
    setDisplay(e.target.value);
    setPlay(true);
  };

  const handlePress = (e) => {
    if (drumKeys.includes(e.key.toLowerCase())) {
      setDrumKey(e.key.toLowerCase());
      setDisplay(drumLabels[e.key.toLowerCase()]);
      setPlay(true);
    }
  };

  const playAudio = () => {
    const audio = document.querySelector(`#${drumKey}`);
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
    <div id="drum-machine" className="m-6 max-w-xs mx-auto">
      <DrumDisplay drum={display} />
      <div className="drum-pad-container mx-auto mt-4 grid grid-cols-3 gap-3 justify-items-start">
        <DrumPad
          drumKey="q"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="w"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="e"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="a"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="s"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="d"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="z"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="x"
          handleClick={handleClick}
          handlePress={handlePress}
        />
        <DrumPad
          drumKey="c"
          handleClick={handleClick}
          handlePress={handlePress}
        />
      </div>
    </div>
  );
};

export default DrumMachine;
