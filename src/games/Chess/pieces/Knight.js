import Piece from './Piece';

class Knight extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Knight';
        this._updatePieceImg();
        this._directions = [
            { dx: 2, dy: 1 },
            { dx: 2, dy: -1 },
            { dx: -2, dy: 1 },
            { dx: -2, dy: -1 },
            { dx: 1, dy: 2 },
            { dx: -1, dy: 2 },
            { dx: 1, dy: -2 },
            { dx: -1, dy: -2 },
        ];
        this._keepsMoving = false;
    }
}

export default Knight;
