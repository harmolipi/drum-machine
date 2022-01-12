import { useState, useEffect } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [drumKey, setDrumKey] = useState('');
  const [drumId, setDrumId] = useState('');
  const [display, setDisplay] = useState('');
  const [play, setPlay] = useState(false);

  const handleClick = (e) => {
    setDrumKey(e.target.innerText);
    setDrumId(e.target.id);
    setDisplay(e.target.value);
    setPlay(true);
    console.log(drumKey, drumId, display);
  };

  const playAudio = () => {
    const audio = document.querySelector(`#${drumId} > audio`);
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
      <DrumPad drumKey="Q" handleClick={handleClick} />
      <DrumPad drumKey="W" handleClick={handleClick} />
      <DrumPad drumKey="E" handleClick={handleClick} />
      <DrumPad drumKey="A" handleClick={handleClick} />
      <DrumPad drumKey="S" handleClick={handleClick} />
      <DrumPad drumKey="D" handleClick={handleClick} />
      <DrumPad drumKey="Z" handleClick={handleClick} />
      <DrumPad drumKey="X" handleClick={handleClick} />
      <DrumPad drumKey="C" handleClick={handleClick} />
    </div>
  );
};

export default DrumMachine;
