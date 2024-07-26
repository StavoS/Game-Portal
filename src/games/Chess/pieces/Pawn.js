import Piece from './Piece';

class Pawn extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Pawn';
        this.updatePieceImg();
    }
}

export default Pawn;
