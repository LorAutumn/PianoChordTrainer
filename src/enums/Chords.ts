import { PianoNotes } from "./PianoNotes";

export const CHORDS = {
  C: [PianoNotes.C, PianoNotes.E, PianoNotes.G],
  CSharp: [PianoNotes.CSharp, PianoNotes.F, PianoNotes.GSharp],
  DFlat: [PianoNotes.DFlat, PianoNotes.F, PianoNotes.AFlat],
  D: [PianoNotes.D, PianoNotes.FSharp, PianoNotes.A],
  DSharp: [PianoNotes.DSharp, PianoNotes.G, PianoNotes.ASharp],
  EFlat: [PianoNotes.EFlat, PianoNotes.G, PianoNotes.BFlat],
  E: [PianoNotes.E, PianoNotes.GSharp, PianoNotes.B],
  F: [PianoNotes.F, PianoNotes.A, PianoNotes.C],
  FSharp: [PianoNotes.FSharp, PianoNotes.ASharp, PianoNotes.CSharp],
  GFlat: [PianoNotes.GFlat, PianoNotes.ASharp, PianoNotes.CSharp],
  G: [PianoNotes.G, PianoNotes.B, PianoNotes.D],
  GSharp: [PianoNotes.GSharp, PianoNotes.C, PianoNotes.DSharp],
  AFlat: [PianoNotes.AFlat, PianoNotes.C, PianoNotes.EFlat],
  A: [PianoNotes.A, PianoNotes.CSharp, PianoNotes.E],
  ASharp: [PianoNotes.ASharp, PianoNotes.D, PianoNotes.F],
  BFlat: [PianoNotes.BFlat, PianoNotes.D, PianoNotes.F],
  B: [PianoNotes.B, PianoNotes.DSharp, PianoNotes.FSharp],
} as const;

export type CHORDS = (typeof CHORDS)[keyof typeof CHORDS];
