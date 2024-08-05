import { useEffect, useRef, useState } from 'react';
import './BinarySearch.css';
import { useAuth } from '../../auth/AuthProvider';

function BinarySearch() {
    const { user } = useAuth();
    const [machineGuess, setMachineGuess] = useState({
        name: 'machine',
        guess: null,
        isTurn: false,
    });
    const [userGuess, setUserGuess] = useState({
        name: user.username,
        guess: 0,
        isTurn: true,
    });
    const [isMachineThinking, setIsMachineThinking] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [winner, setWinner] = useState(null);
    const randNumGoal = useRef();

    useEffect(() => {
        randNumGoal.current = Math.floor(Math.random() * 100);
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log(randNumGoal.current);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target.checkValidity() || isMachineThinking) {
            return;
        }
        setUserGuess((u) => ({ ...u, guess: inputValue }));
        if (+inputValue === randNumGoal.current) {
            declareWinner(userGuess.name);
            return;
        }
        handleMachine();
    };

    function declareWinner(winnerName) {
        setWinner(winnerName);
    }

    function handleMachine() {
        let randChosenNum = Math.floor(Math.random() * 100);
        setIsMachineThinking(true);
        setTimeout(() => {
            setMachineGuess((m) => ({ ...m, guess: randChosenNum }));
            setIsMachineThinking(false);
        }, 3000);
        if (randChosenNum === randNumGoal.current) {
            declareWinner(machineGuess.name);
        }
    }

    function resetGame() {
        randNumGoal.current = Math.floor(Math.random() * 100);
        setWinner(null);
        setUserGuess((u) => ({ ...u, isTurn: false }));
        setMachineGuess((m) => ({ ...m, isTurn: false }));
    }

    return (
        <div className="binary-container">
            <p>
                Dumb Machine guess:{' '}
                {isMachineThinking
                    ? 'Machine Thinking....'
                    : machineGuess.guess}
            </p>
            <p>
                {userGuess.name} Guess: {userGuess.guess}
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className="guess-form">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Enter your guess"
                    className="guess-input"
                    min={0}
                    max={100}
                />
                <button
                    type="submit"
                    className="guess-button"
                    disabled={winner ? true : false}
                >
                    Submit
                </button>
            </form>
            {winner || (
                <p>
                    Goal number is
                    {randNumGoal.current > userGuess.guess
                        ? ' bigger '
                        : ' smaller '}
                    than chosen number
                </p>
            )}
            {winner ? (
                <div>
                    <p className="won-msg-binary">{winner} HAS WON!!!!</p>
                    <button className="reset-btn" onClick={resetGame}>
                        RESET
                    </button>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default BinarySearch;
