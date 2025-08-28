import { useEffect, useState, type ChangeEvent } from "react";

const GuessNum = () => {
  const [randomNumber, setRandomNummber] = useState<number>(0);
  const [getInput, setGetInput] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("");

  const getInputFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setGetInput(e.target.value);
  };
  const generateRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNummber(randomNum);
  };
  const checkGuess = () => {
    const newCount = count + 1;
    setCount(newCount);
    setShowText(true);

    const resetValue: number = Number(getInput);
    if (resetValue === randomNumber) {
      setDisplayText(
        `Congratuations! You guessed the number in ${newCount} attempts`
      );
    } else if (resetValue < randomNumber && resetValue > 0) {
      setDisplayText("Too low! Try again");
    } else if (resetValue > randomNumber && resetValue <= 100) {
      setDisplayText("Too high! Try again");
    } else {
      setDisplayText("Please enter number between 1 and 100");
    }
  };
  const resetGame = () => {
    setCount(0);
    setShowText(false);
    generateRandom();
    setGetInput("");
  };
  useEffect(() => {
    generateRandom();
  }, []);
  return (
    <div className="guessNum-sec">
      <h1>Guess the number</h1>
      <input
        id="guess-input"
        placeholder="Enter a number between 1 and 100"
        value={getInput}
        onChange={(e) => {
          getInputFunc(e);
        }}
      />
      <div className="btn-list">
        <button
          onClick={() => {
            checkGuess();
          }}
        >
          Check Guess
        </button>
        <button
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      </div>
      {showText && <div>{displayText}</div>}
    </div>
  );
};
export default GuessNum;
