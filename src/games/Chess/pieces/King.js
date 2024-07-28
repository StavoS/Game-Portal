import Piece from './Piece';

class King extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'King';
        this._updatePieceImg();
    }

    calcPossibleMoves(chessBoard) {}
}

export default King;
