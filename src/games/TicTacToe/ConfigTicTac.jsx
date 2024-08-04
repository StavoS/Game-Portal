import React from 'react';
import '../ConfigGameForm.css';

function ConfigTicTac({
    boardSize,
    setBoardSize,
    firstPlayer,
    setFirstPlayer,
    secPlayer,
    setSecPlayer,
    setIsStarted,
    setIsTie,
}) {
    function handleFormSubmit(e) {
        e.preventDefault();
        if (e.target.checkValidity()) {
            setIsStarted((s) => true);
            setIsTie(false);
            setFirstPlayer((f) => ({ ...f, isTurn: true, isWon: false }));
            setSecPlayer((f) => ({ ...f, isTurn: false, isWon: false }));
        }
    }

    function changeBoardSize(e) {
        setBoardSize((b) => +e.target.value);
    }

    function changeFirstPlayerName(e) {
        setFirstPlayer((f) => ({ ...f, name: e.target.value }));
    }

    function changeSecPlayerName(e) {
        setSecPlayer((s) => ({ ...s, name: e.target.value }));
    }

    return (
        <div className="player-form">
            <h2>Enter Player Names</h2>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <div className="form-group">
                    <label>
                        Player 1:
                        <input
                            type="text"
                            value={firstPlayer.name}
                            onChange={changeFirstPlayerName}
                            required
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Player 2:
                        <input
                            type="text"
                            value={secPlayer.name}
                            onChange={changeSecPlayerName}
                            required
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Board Size:
                        <input
                            type="number"
                            value={boardSize}
                            onChange={changeBoardSize}
                            min="3"
                            max="10"
                            required
                            className="form-control"
                        />
                    </label>
                </div>
                <button type="submit" className="button-start">
                    Start Game
                </button>
            </form>
        </div>
    );
}

export default ConfigTicTac;
