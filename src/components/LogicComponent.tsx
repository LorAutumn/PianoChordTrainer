import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { Chords, MAJOR_CHORDS, SHARP_FLAT_MAJOR_CHORDS } from "../enums/Chords";
import { useAtom } from "jotai";
import {
  chordAtom,
  isRunningAtom,
  selectedChordsAtom,
  showModalAtom,
  showPianoKeysAtom,
} from "../store/state";
import { Button, Checkbox, Label, RangeSlider } from "flowbite-react";

const LogicComponent = () => {
  const intervalIdRef = useRef<number | null>(null);
  const [isRunning, setIsRunning] = useAtom(isRunningAtom);
  const [chord, setChord] = useAtom(chordAtom);
  const [showPianoKeys, setShowPianoKeys] = useAtom(showPianoKeysAtom);
  const [selectedChords, setSelectedChords] = useAtom(selectedChordsAtom);
  const [intervalLength, setIntervalLength] = useState(2);
  const [showModal, setShowModal] = useAtom(showModalAtom);

  const handleCheckboxChange = (chordRange: Chords[]) => (event: any) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedChords([...selectedChords, ...chordRange]);
    } else {
      setSelectedChords(
        selectedChords.filter((chord) => !chordRange.includes(chord))
      );
    }
  };

  const getRandomChord = (): Chords => {
    // Filter out the current chord from the array of chords to prevent the same chord from being selected twice in a row
    const filteredChords = selectedChords.filter((c) => c !== chord);
    const randomIndex = Math.floor(Math.random() * filteredChords.length);

    return filteredChords[randomIndex];
  };

  const clickHandler = (): void => {
    if (!isRunning) {
      if (selectedChords.length < 1) setShowModal(true);
      else {
        setIsRunning(true);
        setChord(getRandomChord());
      }
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
      <div className="mt-6 flex justify-center">
        <Button onClick={() => clickHandler()} outline>
          {isRunning ? "Stop" : "Start"}
        </Button>
      </div>
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
      <div>
        <Label className="text-inherit text-base mt-2">
          Select Major Chords
        </Label>
        <Checkbox
          onChange={handleCheckboxChange(Object.values(MAJOR_CHORDS))}
        />
        <Label className="text-inherit text-base mt-2">
          Select Sharp/Flat Major Chords
        </Label>
        <Checkbox
          onChange={handleCheckboxChange(
            Object.values(SHARP_FLAT_MAJOR_CHORDS)
          )}
        />
      </div>
    </div>
  );
};

export default LogicComponent;
