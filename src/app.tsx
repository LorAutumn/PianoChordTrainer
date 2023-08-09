import { useAtom } from "jotai";
import LogicComponent from "./components/LogicComponent";
import PianoComponent from "./components/PianoComponent";
import { PianoNotes } from "./enums/PianoNotes";
import { chordAtom } from "./store/chordState";
import ChordComponent from "./components/ChordComponent";

export function App() {
  const [chord] = useAtom(chordAtom);
  const activeKeys: PianoNotes[] = [...chord.values()];

  return (
    <header className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex-col text-white p-20">
      <h1 className="text-5xl font-bold text-center mb-2">Chord Trainer</h1>
      <ChordComponent />
      <PianoComponent keys={activeKeys} />
      <LogicComponent />
    </header>
  );
}
