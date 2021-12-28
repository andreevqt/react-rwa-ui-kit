import React from 'react';
import { TIconProps } from './utils'

const Check = ({
  width = '24',
  height = '24',
}: TIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6L9 17l-5-5"
      />
    </svg>
  );
};

export default Check;
