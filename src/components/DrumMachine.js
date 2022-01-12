import { useState } from 'react';
import DrumDisplay from './DrumDisplay';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [drumKey, setDrumKey] = useState('');

  const handleClick = (e) => {
    setDrumKey(e.target.id);
    const audio = document.querySelector(
      `#${e.target.id.replaceAll(' ', '-').replaceAll("'", '')} > audio`
    );
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div id="drum-machine" className="m-6">
      <DrumDisplay drum={drumKey} />
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
