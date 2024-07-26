class Piece {
    #imgPath = '/assets';
    #imgExt = 'svg';
    constructor(newX, newY, color) {
        this._position = { x: newX, y: newY };
        this._color = color;
        this._pieceName = '';
        this._pieceImg = '';
    }
    updatePieceImg() {
        this._pieceImg = `${this.#imgPath}/${this._color}${this._pieceName}.${
            this.#imgExt
        }`;
    }
    get color() {
        return this._color;
    }
    get position() {
        return this._position;
    }
    get pieceName() {
        return this._pieceName;
    }
}

export default Piece;
