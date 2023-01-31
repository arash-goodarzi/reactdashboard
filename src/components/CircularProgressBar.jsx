import { useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const CircularProgressBar = ({
  progress = "0.75",
  circleWidth,
  radius,
  strokeWidth,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * progress;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#12c2c2e9" />
            <stop offset="50%" stop-color="#c471ed" />
            <stop offset="100%" stop-color="#f64f59" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className="circle-progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2} ) `}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.1rem"
          textAnchor="middle"
          className="circle-text"
          fill="#ffd700"
        >
          {progress * 100}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
