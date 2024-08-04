import { useEffect, useState } from 'react';
import './TicTacToe.css';
import ConfigTicTac from './ConfigTicTac';

function TicTacToe() {
    const [isStarted, setIsStarted] = useState(false);
    const [boardSize, setBoardSize] = useState(3);
    const [board, setBoard] = useState(
        Array(boardSize)
            .fill()
            .map(() => Array(boardSize).fill(null))
    );
    const [firstPlayer, setFirstPlayer] = useState({
        name: 'Trump',
        symbol: 'X',
        isTurn: false,
        isWon: false,
    });
    const [secPlayer, setSecPlayer] = useState({
        name: 'Biden',
        symbol: 'O',
        isTurn: false,
        isWon: false,
    });
    const [isTie, setIsTie] = useState(false);
    const cellSize = 75;

    useEffect(() => {
        setBoard((b) =>
            Array(boardSize)
                .fill()
                .map(() => Array(boardSize).fill(null))
        );
    }, [boardSize]);

    function handleMove(e, rowIndex, colIndex) {
        if (board[rowIndex][colIndex] || !isStarted) return;
        const currShape = getTurnShape();

        const newBoard = board.map((row, rowId) =>
            row.map((cell, colId) => {
                if (rowId === rowIndex && colId === colIndex) {
                    return currShape;
                } else {
                    return cell;
                }
            })
        );

        if (checkTie(newBoard)) {
            setIsTie(true);
            resetGame();
            return;
        }

        if (checkWon(newBoard, currShape)) {
            declareWinner(currShape);
            resetGame();
            return;
        }

        setBoard(newBoard);
        setNextTurn(currShape);
    }

    function getTurnShape() {
        if (firstPlayer.isTurn) {
            return firstPlayer.symbol;
        } else if (secPlayer.isTurn) {
            return secPlayer.symbol;
        }
        return null;
    }

    function setNextTurn(turnShape) {
        if (turnShape === 'X') {
            setFirstPlayer((f) => ({ ...f, isTurn: false }));
            setSecPlayer((s) => ({ ...s, isTurn: true }));
        } else if (turnShape === 'O') {
            setSecPlayer((s) => ({ ...s, isTurn: false }));
            setFirstPlayer((f) => ({ ...f, isTurn: true }));
        }
    }

    function checkTie(newBoard) {
        return newBoard.flat().every((cell) => cell);
    }

    function checkWon(newBoard, symbol) {
        let colCounter = 0;
        let slantCounter = 0;
        let oppSlantCounter = 0;

        for (let i = 0; i < boardSize; i++) {
            if (newBoard[i].every((cellSymbol) => cellSymbol === symbol)) {
                return true;
            }

            for (let j = 0; j < boardSize; j++) {
                if (newBoard[j][i] === symbol) {
                    colCounter++;
                }
            }
            if (newBoard[i][i] === symbol) slantCounter++;

            if (newBoard[i][newBoard.length - i - 1] === symbol)
                oppSlantCounter++;

            if (
                slantCounter === board.length ||
                oppSlantCounter === board.length ||
                colCounter === board.length
            )
                return true;

            colCounter = 0;
        }
        return false;
    }

    function declareWinner(symbol) {
        if (symbol === 'X') {
            setFirstPlayer((f) => ({ ...f, isWon: true }));
        } else if (symbol === 'O') {
            setSecPlayer((s) => ({ ...s, isWon: true }));
        }
    }

    function resetGame() {
        setIsStarted(false);
        setBoard(
            Array(3)
                .fill()
                .map(() => Array(3).fill(null))
        );
    }

    return (
        <div className="outer-container-tictac">
            {isStarted || (
                <ConfigTicTac
                    boardSize={boardSize}
                    setBoardSize={setBoardSize}
                    firstPlayer={firstPlayer}
                    setFirstPlayer={setFirstPlayer}
                    secPlayer={secPlayer}
                    setSecPlayer={setSecPlayer}
                    setIsStarted={setIsStarted}
                    setIsTie={setIsTie}
                />
            )}
            {isStarted && (
                <div
                    className="d-grid text-center tictac-container"
                    style={{
                        gridTemplateColumns: `repeat(${boardSize}, ${cellSize}px)`,
                        gridTemplateRows: `repeat(${boardSize}, ${cellSize}px)`,
                        width: { boardSize },
                        height: { boardSize },
                    }}
                >
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                className="cell-tictac"
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
            {(firstPlayer.isWon || secPlayer.isWon || isTie) && (
                <p className="won-msg">
                    {firstPlayer.isWon
                        ? `${firstPlayer.name} HAS WON!`
                        : secPlayer.isWon
                        ? `${secPlayer.name} HAS WON!!`
                        : ''}
                    {isTie ? 'TIEEEEE!!!!!!' : null}
                </p>
            )}
        </div>
    );
}

export default TicTacToe;
