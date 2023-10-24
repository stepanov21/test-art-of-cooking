import React, { FC, LiHTMLAttributes, ReactNode } from "react";

const MenuItem: FC<
  LiHTMLAttributes<HTMLLIElement> & { children: ReactNode }
> = ({ children, ...props }) => {
  return (
    <li {...props}>
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_648_43301)">
          <path
            d="M5.625 11.25L9.375 7.5L5.625 3.75"
            stroke="#333538"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_648_43301">
            <rect
              width="15"
              height="15"
              fill="white"
              transform="matrix(0 -1 1 0 0 15)"
            />
          </clipPath>
        </defs>
      </svg>
    </li>
  );
};

export default MenuItem;
