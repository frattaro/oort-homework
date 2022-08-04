import { css } from "@emotion/react";
import React from "react";

export default function BackgroundGlow({ children, ...rest }) {
  return (
    <div
      {...rest}
      css={css`
        position: relative;
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 60% 100px,
              cornflowerBlue 0,
              transparent 30%
            ),
            radial-gradient(circle at 80% 300px, blueviolet 0, transparent 30%),
            radial-gradient(
              circle at 40% 100%,
              cornflowerBlue 0,
              transparent 30%
            ),
            radial-gradient(circle at 80% 90%, blueviolet 0, transparent 30%);
          opacity: 0.2;
        `}
      ></div>
      {children}
    </div>
  );
}
