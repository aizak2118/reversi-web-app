import { Move } from "./move";
import { Disc } from "./disc";
import { Board } from "./board";

export class Turn {
  constructor(
    private _gameId: number,
    private _turnCount: number,
    private _nextDisc: Disc,
    private _move: Move | undefined,
    private _board: Board,
    private endAt: Date,
  ) {}
}
