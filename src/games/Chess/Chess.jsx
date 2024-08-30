import { useEffect, useState } from 'react';
import './Chess.css';
import ConfigChess from './ConfigChess';
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
    const [currPiece, setCurrPiece] = useState();
    const [firstPlayer, setFirstPlayer] = useState({
        name: 'Trump',
        color: 'white',
        isTurn: false,
        pieces: [],
    });
    const [secPlayer, setSecPlayer] = useState({
        name: 'Biden',
        color: 'black',
        isTurn: false,
        pieces: [],
    });
    const [winner, setWinner] = useState(null);
    const [isStarted, setIsStarted] = useState(false);

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

        initPlayerPieces(setFirstPlayer, tempBoard);
        initPlayerPieces(setSecPlayer, tempBoard);

        return tempBoard;
    }

    function initPlayerPieces(setPlayer, board) {
        setPlayer((player) => ({
            ...player,
            pieces: getAllPieces(board),
        }));
    }

    function getAllPieces(board) {
        return board.flat().filter((piece) => piece && piece.position.x < 2);
    }

    function handleChosenPiece(piece) {
        if (!piece) return;
        if (firstPlayer.isTurn && piece.color === 'black') return;
        if (secPlayer.isTurn && piece.color === 'white') return;

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
        console.log(piece.calcPossibleMoves(chessBoard));

        setCurrPossibleMoves(piece.calcPossibleMoves(chessBoard));
        setCurrPiece(piece);
        setChessBoard(tempBoard);
    }

    function handleMove(newPosition, positionX, positionY) {
        if (newPosition && newPosition.color === currPiece.color) {
            //check if newPosition is a piece(class)

            setCurrPiece(null);
            handleChosenPiece(newPosition);
            return;
        }
        let tempBoard = [...chessBoard];

        const chosenPosition = currPossibleMoves.find(
            (pos) => positionX === pos.x && positionY === pos.y
        );
        if (!chosenPosition) {
            return;
        }
        tempBoard[currPiece.position.x][currPiece.position.y] = null;

        currPiece.isChosen = false;
        currPiece.updatePosition(chosenPosition);
        tempBoard[chosenPosition.x][chosenPosition.y] = currPiece;

        console.log(tempBoard);

        setCurrPossibleMoves([]);
        setCurrPiece(null);
        setChessBoard(tempBoard);
        if (chosenPosition.enemy) {
            removePiecePlayer(chosenPosition.enemy);
            if (chosenPosition.enemy === 'King') {
                declareWinner();
                resetGame();
                return;
            }
        }
        switchTurns();
    }

    function switchTurns() {
        setFirstPlayer((f) => ({ ...f, isTurn: !f.isTurn }));
        setSecPlayer((s) => ({ ...s, isTurn: !s.isTurn }));
        console.log(firstPlayer.pieces);
    }
    function removePiecePlayer(pieceName) {
        if (firstPlayer.isTurn) {
            const index = firstPlayer.pieces.indexOf(pieceName);
            const filterPieces = firstPlayer.pieces.filter(
                (_, id) => id !== index
            );
            setFirstPlayer((f) => ({ ...f, filterPieces }));
            console.log(filterPieces);
        } else if (secPlayer.isTurn) {
            const index = secPlayer.pieces.indexOf(pieceName);
            const filterPieces = secPlayer.pieces.filter(
                (_, id) => id !== index
            );
            setSecPlayer((s) => ({ ...s, filterPieces }));
            console.log(filterPieces);
        }
    }

    function declareWinner() {
        setWinner(getCurrTurnName());
    }
    const getCurrTurnName = () =>
        firstPlayer.isTurn ? firstPlayer.name : secPlayer.name;

    function resetGame() {
        setChessBoard(initChessBoard());
        setFirstPlayer((f) => ({ isTurn: false, pieces: [], ...f }));
        setSecPlayer((s) => ({ isTurn: false, pieces: [], ...s }));
        setIsStarted(false);
    }

    function callStockFishAPI() {}
    return (
        <>
            <div className="outer-container">
                <div className="config">
                    {isStarted || (
                        <ConfigChess
                            firstPlayer={firstPlayer}
                            setFirstPlayer={setFirstPlayer}
                            secPlayer={secPlayer}
                            setSecPlayer={setSecPlayer}
                            isStarted={isStarted}
                            setIsStarted={setIsStarted}
                        />
                    )}
                </div>
                {isStarted && (
                    <div className="chessboard">
                        {chessBoard.map((row, rowIndex) =>
                            row.map((cell, colIndex) => (
                                <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className={`cell-chess ${
                                        (rowIndex + colIndex) % 2 === 0
                                            ? 'light-chess'
                                            : 'dark-chess'
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
                                    onClick={() =>
                                        currPiece
                                            ? handleMove(
                                                  cell,
                                                  rowIndex,
                                                  colIndex
                                              )
                                            : handleChosenPiece(cell)
                                    }
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
                )}
                {winner && !isStarted ? (
                    <p className="won-msg">{winner} HAS WON!!!!</p>
                ) : null}
            </div>
        </>
    );
}

export default Chess;
