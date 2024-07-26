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
        console.log(tempBoard);
        return tempBoard;
    }
    function handleChosenPiece(row, col) {
        console.log(`${row}-${col}`);
    }
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
                            onClick={() =>
                                handleChosenPiece(rowIndex, colIndex)
                            }
                        >
                            <img
                                className="piece"
                                src="/assets/whiteRook.svg"
                                alt="Rook"
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Chess;
