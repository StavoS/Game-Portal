class Piece {
    #imgPath = '/assets';
    #imgExt = 'svg';
    constructor(newX, newY, color) {
        this.position = { x: newX, y: newY };
        this._color = color;
        this._pieceName = '';
        this._pieceImg = '';
        this.isChosen = false;
        this._possibleMoves = [];
    }
    updatePieceImg() {
        this._pieceImg = `${this.#imgPath}/${this._color}${this._pieceName}.${
            this.#imgExt
        }`;
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
