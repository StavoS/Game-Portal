import Piece from './Piece';

class Pawn extends Piece {
    #isFirstTurn = true;
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Pawn';
        this._updatePieceImg();
        this._directions = [
            { dx: 1, dy: 0 },
            { dx: 2, dy: 0 },
            { dx: 1, dy: 1 },
            { dx: 1, dy: -1 },
        ];
    }

    updatePosition(newPosition) {
        const { isEnemy, ...rest } = newPosition;
        this.position = { ...rest };
        this.#isFirstTurn = false;
    }

    _calc(chessBoard, enemyColor) {
        let possibleMoves = [];
        const { x: startX, y: startY } = this.position;
        const boardSize = chessBoard.length;
        const diretion = this._color === 'black' ? 1 : -1;

        for (const { dx, dy } of this._directions) {
            let x = startX;
            let y = startY;

            x += dx * diretion;
            y += dy;

            if (x >= boardSize || x < 0 || y >= boardSize || y < 0) break;

            const cell = chessBoard[x][y];

            if (dx === 2 && this.#isFirstTurn && !cell) {
                console.log(this.#isFirstTurn);
                possibleMoves.push({ x, y });
                continue;
            } else if (dx === 2) {
                continue;
            }
            if (cell && cell.color === enemyColor && dy !== 0) {
                possibleMoves.push({ x, y, enemy: cell.pieceName });
                continue;
            }
            if (!cell && dy === 0) {
                possibleMoves.push({ x, y });
            }
        }

        return possibleMoves;
    }
}

export default Pawn;
