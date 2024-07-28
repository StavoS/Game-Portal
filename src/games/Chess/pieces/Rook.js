import Piece from './Piece';

class Rook extends Piece {
    constructor(x, y, color) {
        super(x, y, color);
        this._pieceName = 'Rook';
        this._updatePieceImg();
    }

    _calc(chessBoard, enemyColor) {
        let possibleMoves = [];
        const boardSize = chessBoard.length;
        const { x: startX, y: startY } = this.position;

        const directions = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
        ];

        for (const { dx, dy } of directions) {
            let x = startX;
            let y = startY;

            while (true) {
                x += dx;
                y += dy;

                if (x >= boardSize || x < 0 || y >= boardSize || y < 0) break;

                let cell = chessBoard[x][y];
                if (cell) {
                    if (cell.color === this._color) break;

                    if (cell.color === enemyColor) {
                        possibleMoves.push({ x, y });
                        break;
                    }
                }
                possibleMoves.push({ x, y });
            }
        }

        return possibleMoves;
    }
}

export default Rook;
