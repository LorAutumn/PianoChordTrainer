import ChordComponent from "./components/ChordComponent";

export function App() {
  return (
    <header className="h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white p-20">
      <h1 className="text-5xl font-bold text-center mb-2">Chord Trainer</h1>
      <ChordComponent />
    </header>
  );
}
