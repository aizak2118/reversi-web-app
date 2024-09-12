import { Disc } from "./disc";
import { Point } from "./Point";

export class Move {
  constructor(
    private _disc: Disc,
    private _point: Point,
  ) {}
}
