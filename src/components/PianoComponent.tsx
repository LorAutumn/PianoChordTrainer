import { JSX } from "preact/jsx-runtime";
import { PianoNotes } from "../enums/PianoNotes";
import { useAtom } from "jotai";
import { isRunningAtom, showPianoKeysAtom } from "../store/state";

const PianoComponent = ({ keys }: { keys: PianoNotes[] }): JSX.Element => {
  const [showPianoKeys] = useAtom(showPianoKeysAtom);
  const [isRunning] = useAtom(isRunningAtom);

  const activeKeys = isRunning ? keys : [];

  return (
    <div className="h-36">
      {showPianoKeys && (
        <ul className="keyboard flex flex-row justify-center">
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.C)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.C} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.CSharp) ||
                activeKeys.includes(PianoNotes.DFlat))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.CSharp} ${
              PianoNotes.DFlat
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.D)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.D} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li className="ds-key h-24 w-6 bg-black z-10 border-r-2 -ml-3 -mr-3"></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.DSharp) ||
                activeKeys.includes(PianoNotes.EFlat))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.DSharp} ${
              PianoNotes.EFlat
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.E)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.E} h-36 w-8  z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.F)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.F} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.FSharp) ||
                activeKeys.includes(PianoNotes.GFlat))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.FSharp} ${
              PianoNotes.GFlat
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.G)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.G} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.GSharp) ||
                activeKeys.includes(PianoNotes.AFlat))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.GSharp} ${
              PianoNotes.AFlat
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.A)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.A} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.ASharp) ||
                activeKeys.includes(PianoNotes.BFlat))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.ASharp} ${
              PianoNotes.BFlat
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.B)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.B} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.C2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.C2} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.CSharp2) ||
                activeKeys.includes(PianoNotes.DFlat2))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.CSharp2} ${
              PianoNotes.DFlat2
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.D2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.D2} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.DSharp2) ||
                activeKeys.includes(PianoNotes.EFlat2))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.DSharp2} ${
              PianoNotes.EFlat2
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.E2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.E2} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.F2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.F2} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.FSharp2) ||
                activeKeys.includes(PianoNotes.GFlat2))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.FSharp2} ${
              PianoNotes.GFlat2
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.G2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.G2} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.GSharp2) ||
                activeKeys.includes(PianoNotes.AFlat2))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.GSharp2} ${
              PianoNotes.AFlat2
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.A2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.A2} h-36 w-8 z-0 border-r-2`}
          ></li>
          <li
            className={`${
              keys.length > 0 &&
              (activeKeys.includes(PianoNotes.ASharp2) ||
                activeKeys.includes(PianoNotes.BFlat2))
                ? "bg-red-600"
                : "bg-black"
            } ${PianoNotes.AFlat2} ${
              PianoNotes.BFlat2
            } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
          ></li>
          <li
            className={`${
              keys.length > 0 && activeKeys.includes(PianoNotes.B2)
                ? "bg-red-600"
                : "bg-white"
            } ${PianoNotes.B2} h-36 w-8 z-0 border-r-2`}
          ></li>
        </ul>
      )}
    </div>
  );
};

export default PianoComponent;
