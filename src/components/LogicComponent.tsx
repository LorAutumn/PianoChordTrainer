import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { CHORDS } from "../enums/Chords";
import { useAtom } from "jotai";
import { chordAtom, isRunningAtom, showPianoKeysAtom } from "../store/state";
import { Checkbox, Label, RangeSlider } from "flowbite-react";

const LogicComponent = () => {
  const intervalIdRef = useRef<number | null>(null);
  const [isRunning, setIsRunning] = useAtom(isRunningAtom);
  const [chord, setChord] = useAtom(chordAtom);
  const [showPianoKeys, setShowPianoKeys] = useAtom(showPianoKeysAtom);
  const [intervalLength, setIntervalLength] = useState(2);

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

  const changeIntervalLength = (event: any) => {
    const newValue = event.target.value;
    setIntervalLength(newValue);
  };

  const updateChord = useCallback(() => {
    if (!isRunning) return;

    intervalIdRef.current = setInterval(() => {
      setChord(getRandomChord());
    }, intervalLength * 1000);

    return () => clearInterval(intervalIdRef.current!);
  }, [chord, isRunning]);

  useEffect(() => {
    return updateChord();
  }, [updateChord]);

  return (
    <div className="text-center">
      <button
        className="border border-white rounded-lg mt-6 px-4"
        onClick={() => clickHandler()}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <div className="mt-4">
        <Checkbox
          checked={showPianoKeys}
          onChange={() => {
            setShowPianoKeys(!showPianoKeys);
          }}
        />
        <Label className="text-inherit text-base"> show piano keys</Label>
      </div>
      <Label className="text-inherit text-base mt-2">
        Interval in seconds: {intervalLength}
      </Label>
      <RangeSlider
        value={intervalLength}
        onChange={changeIntervalLength}
        min={1}
        max={10}
      />
    </div>
  );
};

export default LogicComponent;
