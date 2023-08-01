import ChordComponent from "./components/ChordComponent";
import PianoComponent from "./components/PianoComponent";
import { PianoNotes } from "./enums/PianoNotes";

export function App() {
  let keyList = [PianoNotes.C, PianoNotes.D, PianoNotes.E, PianoNotes.G, PianoNotes.DFlat];

  return (
    <header className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex-col text-white p-20">
      <h1 className="text-5xl font-bold text-center mb-2">Chord Trainer</h1>
      <ChordComponent />
      <PianoComponent keys={keyList} />
    </header>
  );
}
