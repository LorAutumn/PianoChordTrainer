import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { CHORDS } from "../enums/Chords";
import { useAtom } from "jotai";
import { chordAtom } from "../store/chordState";

const ChordComponent = () => {
  const intervalIdRef = useRef<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalLength, setIntervalLength] = useState(2);
  const [chord, setChord] = useAtom(chordAtom);

  const chords: CHORDS[] = [
    CHORDS.C,
    CHORDS.CSharp,
    CHORDS.DFlat,
    CHORDS.D,
    CHORDS.DSharp,
    CHORDS.EFlat,
    CHORDS.E,
    CHORDS.F,
    CHORDS.FSharp,
    CHORDS.GFlat,
    CHORDS.G,
    CHORDS.GSharp,
    CHORDS.AFlat,
    CHORDS.A,
    CHORDS.ASharp,
    CHORDS.BFlat,
    CHORDS.B,
  ];

  const getRandomChord = (): CHORDS => {
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
          <h1 className="text-9xl mt-8">{chord[0]}</h1>
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
        maxLength={1}
        value={intervalLength}
        onChange={handleChangeIntervalLength}
      />
    </div>
  );
};

export default ChordComponent;
