import React from 'react';

const ProgressBar = ({ progress, onChange, leftLabel, rightLabel }) => {
  return (
    <div className="flex flex-col sm:w-[500px] w-full pt-5">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="slider"
        onChange={(event) => {
          onChange(parseInt(event?.target.value));
        }}
      />
      <div className="flex w-full flex-row justify-between mt-1 text-primary">
        <span className="text-xs text-ternary-dark dark:text-ternary-light">{leftLabel}</span>
        <span className="text-xs text-ternary-dark dark:text-ternary-light">{rightLabel}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
