import Piece from './Piece';

class Pawn extends Piece {
    #isFirstTurn = true;
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Pawn';
        this.updatePieceImg();
    }

    calcPossibleMoves(chessBoard) {
        if (this._color === 'black') {
            return this.#calc(chessBoard, 1, 2);
        } else if (this._color === 'white') {
            return this.#calc(chessBoard, -1, -2);
        }

        //this.#isFirstTurn = false;
    }
    #calc(chessBoard, oneMove, twoMove) {
        let possibleMoves = [];

        if (this.#isFirstTurn) {
            possibleMoves = [
                { x: this._position.x + oneMove, y: this._position.y },
                { x: this._position.x + twoMove, y: this._position.y },
            ];
        } else {
            possibleMoves = [
                { x: this._position.x + oneMove, y: this._position.y },
            ];
        }

        return possibleMoves;
    }
}

export default Pawn;
