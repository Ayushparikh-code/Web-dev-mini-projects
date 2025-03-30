import React from "react";

function InputBox({ setTemp, handleClick }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        onChange={(e) => {
          setTemp(e.target.value);
        }}
        placeholder="Enter text to encode"
        className="h-9 w-64 text-lg pl-1"
      />
      <button
        className="relative h-9 w-24 text-lg text-white bg-green-600 shadow-md hover:bg-green-700 active:shadow-none"
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  );
}

export default InputBox;
