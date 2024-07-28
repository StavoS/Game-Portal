class Piece {
    #imgPath = '/assets';
    #imgExt = 'svg';
    constructor(newX, newY, color) {
        this.position = { x: newX, y: newY };
        this._color = color;
        this._pieceName = '';
        this._pieceImg = '';
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
        throw new Error('FUNCTION MUSE BE IMPLEMNETED');
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
