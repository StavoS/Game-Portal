import { useEffect, useState } from 'react';
import './Chess.css';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import King from './pieces/King';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Rook from './pieces/Rook';

const BOARD_SIZE = 8;
function Chess() {
    const [chessBoard, setChessBoard] = useState(
        Array(BOARD_SIZE)
            .fill()
            .map(() => Array(BOARD_SIZE).fill(null))
    );
    const [currPossibleMoves, setCurrPossibleMoves] = useState([]);

    useEffect(() => {
        setChessBoard(initChessBoard());
    }, []);

    function initChessBoard() {
        let tempBoard = Array(BOARD_SIZE)
            .fill()
            .map(() => Array(BOARD_SIZE).fill(null));

        for (let rowId = 0; rowId < BOARD_SIZE; rowId++) {
            const color = rowId < 2 ? 'black' : 'white';
            for (let colId = 0; colId < BOARD_SIZE; colId++) {
                if (rowId === 0 || rowId === 7) {
                    switch (colId) {
                        case 0:
                        case 7:
                            tempBoard[rowId][colId] = new Rook(
                                rowId,
                                colId,
                                color
                            );
                            break;
                        case 1:
                        case 6:
                            tempBoard[rowId][colId] = new Knight(
                                rowId,
                                colId,
                                color
                            );
                            break;
                        case 2:
                        case 5:
                            tempBoard[rowId][colId] = new Bishop(
                                rowId,
                                colId,
                                color
                            );
                            break;
                        case 3:
                            tempBoard[rowId][colId] = new Queen(
                                rowId,
                                colId,
                                color
                            );
                            break;
                        case 4:
                            tempBoard[rowId][colId] = new King(
                                rowId,
                                colId,
                                color
                            );
                            break;
                        default:
                            break;
                    }
                } else if (rowId === 1 || rowId === 6) {
                    tempBoard[rowId][colId] = new Pawn(rowId, colId, color);
                }
            }
        }
        //console.log(tempBoard);
        return tempBoard;
    }

    function handleChosenPiece(piece) {
        if (!piece) return;

        let tempBoard = [...chessBoard];
        tempBoard = tempBoard.map((row) =>
            row.map((cell) => {
                if (cell && cell.isChosen) {
                    cell.isChosen = false;
                    return cell;
                } else {
                    return cell;
                }
            })
        );
        tempBoard[piece.position.x][piece.position.y].isChosen = true;
        console.log(tempBoard);
        setCurrPossibleMoves(piece.calcPossibleMoves(chessBoard));
        setChessBoard(tempBoard);
    }

    function handleMove() {}

    return (
        <div className="outer-container">
            <div className="chessboard">
                {chessBoard.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${
                                (rowIndex + colIndex) % 2 === 0
                                    ? 'light'
                                    : 'dark'
                            }`}
                            style={
                                currPossibleMoves.find(
                                    (move) =>
                                        move.x === rowIndex &&
                                        move.y === colIndex
                                )
                                    ? { backgroundColor: 'lightgreen' }
                                    : {}
                            }
                            onClick={() => handleChosenPiece(cell)}
                        >
                            {cell ? (
                                <img
                                    className="piece"
                                    src={cell.pieceImg}
                                    alt=""
                                />
                            ) : (
                                ''
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Chess;

//להוסיף תנאי שאם הוא נמצא בתוך המערך עם כל האפשריות של התזוזות אז להבהיר בצבע מסוים
