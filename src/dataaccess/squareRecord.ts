export class SquareRecord {
  constructor(
    private _id: number,
    private _turnId: number,
    private _x: number,
    private _y: number,
    private _disc: number,
  ) {}

  get y() {
    return this._y;
  }

  get x() {
    return this._x;
  }

  get disc() {
    return this._disc;
  }
}
