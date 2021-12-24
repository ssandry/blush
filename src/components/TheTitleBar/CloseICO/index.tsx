import React, { FunctionComponent } from "react";

/**
 *
 * Close ICO SVG component
 *
 * @returns {FunctionComponent}
 *
 */
const CloseICO: FunctionComponent = () => {
  return (
    <>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#close)">
          <path
            d="M8.28262 7.01168L13.7339 1.56019C14.0887 1.2056 14.0887 0.632263 13.7339 0.277666C13.3793 -0.0769304 12.806 -0.0769304 12.4514 0.277666L6.99992 5.72916L1.5486 0.277666C1.19384 -0.0769304 0.620669 -0.0769304 0.266072 0.277666C-0.0886907 0.632263 -0.0886907 1.2056 0.266072 1.56019L5.7174 7.01168L0.266072 12.4632C-0.0886907 12.8178 -0.0886907 13.3911 0.266072 13.7457C0.442789 13.9226 0.675146 14.0114 0.907336 14.0114C1.13953 14.0114 1.37172 13.9226 1.5486 13.7457L6.99992 8.29421L12.4514 13.7457C12.6283 13.9226 12.8605 14.0114 13.0927 14.0114C13.3249 14.0114 13.5571 13.9226 13.7339 13.7457C14.0887 13.3911 14.0887 12.8178 13.7339 12.4632L8.28262 7.01168Z"
            fill="#F2EEE3"
          />
        </g>
        <defs>
          <clipPath id="close">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default CloseICO;
