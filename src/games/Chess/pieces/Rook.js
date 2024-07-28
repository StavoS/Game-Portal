import Piece from './Piece';

class Rook extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Rook';
        this._updatePieceImg();
        this._directions = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
        ];
        this._keepsMoving = true;
    }
}

export default Rook;
