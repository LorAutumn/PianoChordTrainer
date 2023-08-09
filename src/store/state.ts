import { atom } from "jotai";
import { Chords, MAJOR_CHORDS } from "../enums/Chords";

export const chordAtom = atom<Chords>(MAJOR_CHORDS.C);
export const isRunningAtom = atom<boolean>(false);
export const showPianoKeysAtom = atom<boolean>(true);
export const selectedChordsAtom = atom<Chords[]>([]);
export const showModalAtom = atom<boolean>(false);
