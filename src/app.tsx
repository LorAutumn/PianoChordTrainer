import { useAtom } from "jotai";
import LogicComponent from "./components/LogicComponent";
import PianoComponent from "./components/PianoComponent";
import { PianoNotes } from "./enums/PianoNotes";
import { chordAtom } from "./store/state";
import ChordComponent from "./components/ChordComponent";
import SelectChordsModal from "./components/SelectChordsModal";

export function App() {
  const [chord] = useAtom(chordAtom);
  const activeKeys: PianoNotes[] = [...chord.values()];

  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex-col text-white p-20">
      <header>
        <h1 className="text-5xl font-bold text-center mb-2">Chord Trainer</h1>
      </header>
      <ChordComponent />
      <SelectChordsModal />
      <PianoComponent keys={activeKeys} />
      <LogicComponent />
    </div>
  );
}
