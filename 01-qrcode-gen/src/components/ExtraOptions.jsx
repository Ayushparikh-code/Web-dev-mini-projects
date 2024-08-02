import React from "react";

function ExtraOptions({ setBgColor, size, setSize }) {
  return (
    <div className="flex items-center gap-4 pt-5">
      <div className="flex flex-col items-center gap-2">
        <h5>Background Color:</h5>
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value.substring(1));
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h5>Dimension:</h5>
        <input
          type="range"
          min="50"
          max="600"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default ExtraOptions;
