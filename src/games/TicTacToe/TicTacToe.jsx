import { useEffect, useState } from 'react';
import './TicTacToe.css';
import ConfigTicTac from './ConfigTicTac';

function TicTacToe() {
    const [isStarted, setIsStarted] = useState(false);
    const [rows, setRows] = useState(3);
    const [columns, setColumns] = useState(3);
    const [board, setBoard] = useState(
        Array(rows)
            .fill()
            .map(() => Array(columns).fill(null))
    );
    const [firstPlayer, setFirstPlayer] = useState({
        name: 'John',
        symbol: 'X',
        isTurn: false,
    });
    const [secPlayer, setSecPlayer] = useState({
        name: 'Bohn',
        symbol: 'O',
        isTurn: false,
    });
    const cellSize = 75;
    const boardSize = cellSize * Math.max(rows, columns);

    useEffect(() => {
        setBoard((b) =>
            Array(rows)
                .fill()
                .map(() => Array(columns).fill(null))
        );
    }, [rows, columns]);

    function handleMove(e, rowIndex, colIndex) {
        console.log(`${rowIndex}-${colIndex}`);
        if (board[rowIndex][colIndex]) return;
        setBoard((b) =>
            b.map((row, rowId, tempBoard) =>
                row.map((cell, colId) => {
                    if (rowId === rowIndex && colId === colIndex) {
                        return 'X';
                    } else {
                        return tempBoard[rowId][colId];
                    }
                })
            )
        );
    }
    return (
        <div className="outer-container">
            {isStarted || (
                <ConfigTicTac
                    rows={rows}
                    setRows={setRows}
                    columns={columns}
                    setColumns={setColumns}
                    firstPlayer={firstPlayer}
                    setFirstPlayer={setFirstPlayer}
                    secPlayer={secPlayer}
                    setSecPlayer={setSecPlayer}
                    isStarted={isStarted}
                    setIsStarted={setIsStarted}
                />
            )}
            {isStarted && (
                <div
                    className="d-grid text-center tictac-container"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
                        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
                        width: { boardSize },
                        height: { boardSize },
                    }}
                >
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                className="cell"
                                onClick={(e) =>
                                    handleMove(e, rowIndex, colIndex)
                                }
                            >
                                {cell}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default TicTacToe;
