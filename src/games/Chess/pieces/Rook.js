import Piece from './Piece';

class Rook extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Rook';
        this.updatePieceImg();
    }
}

export default Rook;
