import React from 'react';
import '../ConfigGameForm.css';

function ConfigChess({
    firstPlayer,
    setFirstPlayer,
    secPlayer,
    setSecPlayer,
    isStarted,
    setIsStarted,
}) {
    function handleStart(e) {
        e.preventDefault();
        setIsStarted(true);
        setFirstPlayer((f) => ({ ...f, isTurn: true }));
    }
    function changeFirstName(e) {
        setFirstPlayer((f) => ({ ...f, name: e.target.value }));
    }
    function changeSecName(e) {
        setSecPlayer((s) => ({ ...s, name: e.target.value }));
    }
    return (
        <div className="player-form">
            <h2>Enter Player Names</h2>
            <form onSubmit={handleStart}>
                <div className="form-group">
                    <label htmlFor="player1">White Player Name:</label>
                    <input
                        type="text"
                        id="player1"
                        value={firstPlayer.name}
                        onChange={changeFirstName}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="player2">Black Player Name:</label>
                    <input
                        type="text"
                        id="player2"
                        value={secPlayer.name}
                        onChange={changeSecName}
                        required
                    />
                </div>
                <button type="submit" className="button-start">
                    Start
                </button>
            </form>
        </div>
    );
}

export default ConfigChess;
