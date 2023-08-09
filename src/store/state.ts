import { atom } from "jotai";
import { Chords, MAJOR_CHORDS, MajorChords, SHARP_FLAT_MAJOR_CHORDS, SharpMajorChords } from "../enums/Chords";

export const chordAtom = atom<Chords>(MAJOR_CHORDS.C);
export const isRunningAtom = atom<boolean>(false);
export const showPianoKeysAtom = atom<boolean>(true);
export const selectedChordsAtom = atom<Chords[]>([]);
