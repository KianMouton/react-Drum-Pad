import { useEffect, useState } from "react";
import './App.css';

const App = () => {

  const [ key, setKey ] = useState("");

  const sounds = {
      Q: "Heater 1",
      W: "Heater 2",
      E: "Heater 3",
      A: "Heater 4",
      S: "Clap",
      D: "open-HH",
      Z: "Kick-n`-Hat",
      X: "Kick",
      C: "Closed-HH",
  }

  const handleSound = (id) => {
    const audio = document.getElementsByClassName("clip");
    const clip = audio[id];
    clip.play();
    setKey(sounds[id]);
  }

  const handleKeyPress = (event) => {
    const keys = {
      Q: "Q",
      W: "W",
      E: "E",
      A: "A",
      S: "S",
      D: "D",
      Z: "Z",
      X: "X",
      C: "C",
    };
    const key = event.key.toUpperCase();
    if (keys[key]) {
      handleSound(keys[key]);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  })

  return (
    <div id="drum-machine" className="drum-machine">
      <p>Press any of the keys below the play the drum pad</p>
      <div className="drum-col">
        <button onClick={() => handleSound("Q")} id="Q" className="drum-pad">
          <audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
          Q</button>
          <button onClick={() => handleSound("W")} id="W" className="drum-pad">
          <audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
          W</button>
          <button onClick={() => handleSound("E")} id="E" className="drum-pad">
          <audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
          E</button>
      </div>
      <div className="drum-col">
      <button onClick={() => handleSound("A")} id="A" className="drum-pad">
          <audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
          A</button>
          <button onClick={() => handleSound("S")} id="S" className="drum-pad">
          <audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
          S</button>
          <button onClick={() => handleSound("D")} id="D" className="drum-pad">
          <audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
          D</button>
      </div>
      <div className="drum-col">
      <button onClick={() => handleSound("Z")} id="Z" className="drum-pad">
          <audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
          Z</button>
          <button onClick={() => handleSound("X")} id="X" className="drum-pad">
          <audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
          X</button>
          <button onClick={() => handleSound("C")} id="C" className="drum-pad">
          <audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
          C</button>
      </div>
      <div id="display">
        <p>current key</p>
        <p id="current-sound">{key}</p>
      </div>
    </div>
  );
}

export default App;
