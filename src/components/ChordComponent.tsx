import { useAtom } from "jotai";
import { chordAtom, isRunningAtom } from "../store/state";

const ChordComponent = () => {
  const [chord] = useAtom(chordAtom);
  const [isRunning] = useAtom(isRunningAtom);

  return (
    <div className="text-center mb-10 h-40">
      <div>
        {isRunning ? (
          <h1 className="text-9xl mt-8">{chord[0]}</h1>
        ) : (
          <p className="text-5xl mt-8">Press Start to begin</p>
        )}
      </div>
    </div>
  );
};

export default ChordComponent;
