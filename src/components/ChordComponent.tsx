import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { Chords } from "../enums/Chords";

const ChordComponent = () => {
  const intervalIdRef = useRef<number | null>(null);
  const [chord, setChord] = useState("C");
  const [isRunning, setIsRunning] = useState(false);
  const [intervalLength, setIntervalLength] = useState(2);

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

  const handleChangeIntervalLength = (event: any) => {
    setIntervalLength(event.target.value * 1000);
  };

  const updateChord = useCallback(() => {
    if (!isRunning) return;

    intervalIdRef.current = setInterval(() => {
      setChord(getRandomChord());
    }, intervalLength);

    return () => clearInterval(intervalIdRef.current!);
  }, [chord, isRunning]);

  useEffect(() => {
    return updateChord();
  }, [updateChord]);

  return (
    <div className="text-center">
      <div className="h-60">
        {isRunning ? (
          <h1 className="text-9xl mt-8">{chord}</h1>
        ) : (
          <p className="text-5xl mt-8">Press Start to begin</p>
        )}
      </div>
      <button
        className="border border-white rounded-lg mt-6 px-4"
        onClick={() => clickHandler()}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <input
        className="text-slate-900"
        type="number"
        value={intervalLength}
        onChange={handleChangeIntervalLength}
        // onChange={handleChangeIntervalLength}
      />
    </div>
  );
};

export default ChordComponent;
