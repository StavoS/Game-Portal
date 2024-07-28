import Piece from './Piece';

class Knight extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Knight';
        this._updatePieceImg();
    }
    calcPossibleMoves(chessBoard) {}
}

export default Knight;
