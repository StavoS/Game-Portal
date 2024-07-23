function ConfigTicTac({
    boardSize,
    setBoardSize,
    firstPlayer,
    setFirstPlayer,
    secPlayer,
    setSecPlayer,
    isStarted,
    setIsStarted,
}) {
    function handleFormSubmit(e) {
        e.preventDefault();
        if (e.target.checkValidity()) {
            setIsStarted((s) => true);
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
        <div>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <div>
                    <label>
                        Player 1:
                        <input
                            type="text"
                            value={firstPlayer.name}
                            onChange={(e) => changeFirstPlayerName(e)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Player 2:
                        <input
                            type="text"
                            value={secPlayer.name}
                            onChange={(e) => changeSecPlayerName(e)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Board Size:
                        <input
                            type="number"
                            value={boardSize}
                            onChange={(e) => changeBoardSize(e)}
                            min="3"
                            max="10"
                            required
                        />
                    </label>
                </div>
                <button type="submit">Start Game</button>
            </form>
        </div>
    );
}

export default ConfigTicTac;
