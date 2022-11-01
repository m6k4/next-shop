import { useState } from "react";

// type CounterInputProps = {
//   value: number;
//   setValue: (value: number) => void;
// };

const CounterInput = ({ value, setValue }) => {
  const increment = () => {
    setValue(currentValue => currentValue + 1);
  };

  const decrement = () => {
    if ( value > 0) {
      setValue(currentValue => currentValue - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
        onClick={decrement}>
        -
      </button>
      <p className="px-4">{value}</p>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default CounterInput;