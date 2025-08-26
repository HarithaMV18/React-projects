import { useState } from "react";
import type { ChipsList } from "../types/interfaces";

const ChipsInput = () => {
  const [enteredInput, setEnteredInput] = useState<ChipsList[]>([]);
  const [currentValue, setCurrentValue] = useState<string>("");
  const getKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();
      const trimmedValue = currentValue.trim();
      if (trimmedValue === "") return;
      setEnteredInput((prev) => [
        ...prev,
        { id: prev.length + 1, chips: trimmedValue },
      ]);
      setCurrentValue("");
    }
  };
  const deleteChips = (id: number) => {
    const newArray = enteredInput.filter((item) => {
      return item.id !== id;
    });
    setEnteredInput(newArray);
  };
  return (
    <div className="chips-section">
      <form className="input-section">
        <input
          type="text"
          value={currentValue}
          placeholder="Type a chip and press tag"
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
          onKeyDown={(e) => getKey(e)}
        />
      </form>
      <ul className="list-items">
        {enteredInput.map((listItems) => {
          return (
            <li key={listItems.id}>
              {listItems.chips}
              <span onClick={() => deleteChips(listItems.id)}>&nbsp;X</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChipsInput;
