import Piece from './Piece';

class Queen extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Queen';
        this.updatePieceImg();
    }
}

export default Queen;
