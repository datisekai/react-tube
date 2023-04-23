import React, { FC } from "react";

interface ProgressBarProps {
  percent?: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percent = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-primary text-xs font-medium text-primary-content text-center p-0.5 leading-none rounded-full"
        style={{ width: `${percent}%` }}
      >
        {percent}%
      </div>
    </div>
  );
};

export default ProgressBar;
