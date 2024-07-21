function ConfigTicTac({
    rows,
    setRows,
    columns,
    setColumns,
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
        }
    }
    function changeRows(e) {
        setRows((r) => +e.target.value);
    }
    function changeCols(e) {
        setColumns((c) => +e.target.value);
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
                        Rows:
                        <input
                            type="number"
                            value={rows}
                            onChange={(e) => changeRows(e)}
                            min="3"
                            max="10"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Columns:
                        <input
                            type="number"
                            value={columns}
                            onChange={(e) => changeCols(e)}
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
