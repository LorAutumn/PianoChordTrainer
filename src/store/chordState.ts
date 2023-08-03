import { atom } from "jotai";
import { CHORDS } from "../enums/Chords";

export const chordAtom = atom<CHORDS>(CHORDS.C);
