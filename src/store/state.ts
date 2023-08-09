import { atom } from "jotai";
import { CHORDS } from "../enums/Chords";

export const chordAtom = atom<CHORDS>(CHORDS.C);
export const isRunningAtom = atom<boolean>(false);
export const showPianoKeysAtom = atom<boolean>(true);
