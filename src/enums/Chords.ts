import { PianoNotes } from "./PianoNotes";

export const MAJOR_CHORDS = {
  C: [PianoNotes.C, PianoNotes.E, PianoNotes.G],
  D: [PianoNotes.D, PianoNotes.FSharp, PianoNotes.A],
  E: [PianoNotes.E, PianoNotes.GSharp, PianoNotes.B],
  F: [PianoNotes.F, PianoNotes.A, PianoNotes.C],
  G: [PianoNotes.G, PianoNotes.B, PianoNotes.D],
  A: [PianoNotes.A, PianoNotes.CSharp, PianoNotes.E],
  B: [PianoNotes.B, PianoNotes.DSharp, PianoNotes.FSharp],
} as const;

export const SHARP_FLAT_MAJOR_CHORDS = {
  CSharp: [PianoNotes.CSharp, PianoNotes.F, PianoNotes.GSharp],
  DFlat: [PianoNotes.DFlat, PianoNotes.F, PianoNotes.AFlat],
  DSharp: [PianoNotes.DSharp, PianoNotes.G, PianoNotes.ASharp],
  EFlat: [PianoNotes.EFlat, PianoNotes.G, PianoNotes.BFlat],
  FSharp: [PianoNotes.FSharp, PianoNotes.ASharp, PianoNotes.CSharp],
  GFlat: [PianoNotes.GFlat, PianoNotes.ASharp, PianoNotes.CSharp],
  GSharp: [PianoNotes.GSharp, PianoNotes.C, PianoNotes.DSharp],
  AFlat: [PianoNotes.AFlat, PianoNotes.C, PianoNotes.EFlat],
  ASharp: [PianoNotes.ASharp, PianoNotes.D, PianoNotes.F],
  BFlat: [PianoNotes.BFlat, PianoNotes.D, PianoNotes.F],
} as const;

export type MajorChords = (typeof MAJOR_CHORDS)[keyof typeof MAJOR_CHORDS];
export type SharpMajorChords =
  (typeof SHARP_FLAT_MAJOR_CHORDS)[keyof typeof SHARP_FLAT_MAJOR_CHORDS];
export type Chords = MajorChords | SharpMajorChords;
