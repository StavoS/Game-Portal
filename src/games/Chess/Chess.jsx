import { useEffect, useState } from 'react';
import './Chess.css';

const BOARD_SIZE = 8;
function Chess() {
    const [chessBoard, setChessBoard] = useState(
        Array(BOARD_SIZE)
            .fill()
            .map(() => Array(BOARD_SIZE).fill(null))
    );

    useEffect(() => {
        let tempBoard = Array(BOARD_SIZE)
            .fill()
            .map(() => Array(BOARD_SIZE).fill(null));

        for (let i = 0; i < BOARD_SIZE; i++) {
            let asciiCode = 'a'.charCodeAt(0);
            for (let j = 0; j < BOARD_SIZE; j++) {
                tempBoard[i][j] = `${String.fromCharCode(asciiCode)}${
                    BOARD_SIZE - i
                }`;
                asciiCode++;
            }
        }
        setChessBoard(tempBoard);
    }, []);

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
                        >
                            <img
                                className="piece"
                                src="/assets/blackRook.svg"
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
