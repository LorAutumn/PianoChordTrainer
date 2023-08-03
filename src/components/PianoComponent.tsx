import { JSX } from "preact/jsx-runtime";
import { PianoNotes } from "../enums/PianoNotes";

const PianoComponent = ({ keys }: { keys: PianoNotes[] }): JSX.Element => {
  return (
    <ul className="keyboard flex flex-row">
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.C)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.C} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.CSharp) || keys.includes(PianoNotes.DFlat))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.CSharp} ${
          PianoNotes.DFlat
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.D)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.D} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li className="ds-key h-24 w-6 bg-black z-10 border-r-2 -ml-3 -mr-3"></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.DSharp) || keys.includes(PianoNotes.EFlat))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.DSharp} ${
          PianoNotes.EFlat
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.E)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.E} h-36 w-8  z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.F)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.F} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.FSharp) || keys.includes(PianoNotes.GFlat))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.FSharp} ${
          PianoNotes.GFlat
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.G)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.G} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.GSharp) || keys.includes(PianoNotes.AFlat))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.GSharp} ${
          PianoNotes.AFlat
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.A)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.A} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.ASharp) || keys.includes(PianoNotes.BFlat))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.ASharp} ${
          PianoNotes.BFlat
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.B)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.B} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.C2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.C2} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.CSharp2) ||
            keys.includes(PianoNotes.DFlat2))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.CSharp2} ${
          PianoNotes.DFlat2
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.D2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.D2} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.DSharp2) ||
            keys.includes(PianoNotes.EFlat2))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.DSharp2} ${
          PianoNotes.EFlat2
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.E2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.E2} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.F2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.F2} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.FSharp2) ||
            keys.includes(PianoNotes.GFlat2))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.FSharp2} ${
          PianoNotes.GFlat2
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.G2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.G2} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.GSharp2) ||
            keys.includes(PianoNotes.AFlat2))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.GSharp2} ${
          PianoNotes.AFlat2
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.A2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.A2} h-36 w-8 z-0 border-r-2`}
      ></li>
      <li
        className={`${
          keys.length > 0 &&
          (keys.includes(PianoNotes.ASharp2) ||
            keys.includes(PianoNotes.BFlat2))
            ? "bg-red-600"
            : "bg-black"
        } ${PianoNotes.AFlat2} ${
          PianoNotes.BFlat2
        } h-24 w-6 z-10 border-r-2 -ml-3 -mr-3`}
      ></li>
      <li
        className={`${
          keys.length > 0 && keys.includes(PianoNotes.B2)
            ? "bg-red-600"
            : "bg-white"
        } ${PianoNotes.B2} h-36 w-8 z-0 border-r-2`}
      ></li>
    </ul>
  );
};

export default PianoComponent;
