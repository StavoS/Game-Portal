import Piece from './Piece';

class Bishop extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Bishop';
        this._updatePieceImg();
        this._directions = [
            { dx: 1, dy: 1 },
            { dx: 1, dy: -1 },
            { dx: -1, dy: 1 },
            { dx: -1, dy: -1 },
        ];
        this._keepsMoving = true;
    }
}

export default Bishop;
