import Piece from './Piece';

class Bishop extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Bishop';
        this.updatePieceImg();
    }
}

export default Bishop;
