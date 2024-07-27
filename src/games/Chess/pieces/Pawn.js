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
            return this.#calc(chessBoard, 'white');
        } else if (this._color === 'white') {
            return this.#calc(chessBoard, 'black');
        }
    }

    updatePosition(newPosition) {
        const { isEnemy, ...rest } = newPosition;
        this.position = { ...rest };
        this.#isFirstTurn = false;
    }
    #calc(chessBoard, enemyColor) {
        let possibleMoves = [];
        const moveSpace = this.#isFirstTurn ? 2 : 1;
        const direction = this._color === 'black' ? 1 : -1;

        for (let i = 1; i <= moveSpace; i++) {
            const newX = this.position.x + i * direction;
            const newY = this.position.y;

            if (newX < 0 || newX >= chessBoard.length) break;

            const targetCell = chessBoard[newX][newY];

            if (targetCell && targetCell.color === this._color) break;

            if (targetCell && targetCell.color === enemyColor) {
                possibleMoves.push({ x: newX, y: newY, isEnemy: true });
                break;
            }

            possibleMoves.push({ x: newX, y: newY });
        }

        return possibleMoves;
    }
}

export default Pawn;
