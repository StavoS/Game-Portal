class Piece {
    #imgPath = '/assets/imagePieces';
    #imgExt = 'svg';
    constructor(newX, newY, color) {
        this.position = { x: newX, y: newY };
        this._color = color;
        this._pieceName = '';
        this._pieceImg = '';
        this._directions = [];
        this._keepsMoving = false; //CHECK WHETHER A PIECE CAN MOVE MORE THAN ONE MOVE EACH DIRECTION(WILL BE OVERRIDEN)
        this.isChosen = false;
    }
    _updatePieceImg() {
        this._pieceImg = `${this.#imgPath}/${this._color}${this._pieceName}.${
            this.#imgExt
        }`;
    }
    updatePosition(newPosition) {
        const { isEnemy, ...rest } = newPosition;
        this.position = { ...rest };
    }

    calcPossibleMoves(chessBoard) {
        if (this._color === 'black') {
            return this._calc(chessBoard, 'white');
        } else if (this._color === 'white') {
            return this._calc(chessBoard, 'black');
        }
    }

    _calc(chessBoard, enemyColor) {
        let possibleMoves = [];
        const { x: startX, y: startY } = this.position;
        const boardSize = chessBoard.length;

        for (const { dx, dy } of this._directions) {
            let x = startX;
            let y = startY;

            do {
                x += dx;
                y += dy;

                if (x >= boardSize || x < 0 || y >= boardSize || y < 0) break;

                const cell = chessBoard[x][y];
                if (cell) {
                    if (cell.color === this._color) break;

                    if (cell.color === enemyColor) {
                        possibleMoves.push({ x, y, enemy: cell.pieceName });
                        break;
                    }
                }

                possibleMoves.push({ x, y });
            } while (this._keepsMoving);
        }

        return possibleMoves;
    }

    get color() {
        return this._color;
    }
    get pieceName() {
        return this._pieceName;
    }
    get pieceImg() {
        return this._pieceImg;
    }
}

export default Piece;
