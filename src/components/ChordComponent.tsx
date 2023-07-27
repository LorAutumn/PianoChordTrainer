import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { Chords } from "../enums/Chords";

const ChordComponent = () => {
  const intervalIdRef = useRef<number | null>(null);
  const [chord, setChord] = useState("C");
  const [isRunning, setIsRunning] = useState(false);

  const chords: Chords[] = [
    Chords.C,
    Chords.D,
    Chords.E,
    Chords.F,
    Chords.G,
    Chords.A,
    Chords.B,
  ];

  const getRandomChord = (): Chords => {
    // Filter out the current chord from the array of chords to prevent the same chord from being selected twice in a row
    const filteredChords = chords.filter((c) => c !== chord);
    const randomIndex = Math.floor(Math.random() * filteredChords.length);

    return filteredChords[randomIndex];
  };

  const clickHandler = (): void => {
    if (!isRunning) {
      setIsRunning(true);
      setChord(getRandomChord());
    } else {
      setIsRunning(false);
      clearInterval(intervalIdRef.current!);
    }
  };

  const updateChord = useCallback(() => {
    if (!isRunning) return;

    intervalIdRef.current = setInterval(() => {
      setChord(getRandomChord());
    }, 2000);

    return () => clearInterval(intervalIdRef.current!);
  }, [chord, isRunning]);

  useEffect(() => {
    return updateChord();
  }, [updateChord]);

  return (
    <div>
      <h1>{chord}</h1>
      <button onClick={() => clickHandler()}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default ChordComponent;
