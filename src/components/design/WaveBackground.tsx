import { styled } from "@mui/material/styles";
import React, { ReactElement } from "react";

const WaveContainer = styled("div")({
  position: "absolute",
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
  zIndex: -1,
});

const WaveSVG = styled("svg")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "465px",
  bottom: "0",
  [theme.breakpoints.down("md")]: {
    height: "15em",
  },
  [theme.breakpoints.down("sm")]: {
    height: "10em",
  },
}));

const WaveBackground = (): ReactElement => {
  return (
    <WaveContainer>
      <WaveSVG viewBox="0 0 1440 465" preserveAspectRatio="none">
        <path
          d="M0 110.433C102.924 53.6918 304.348 55.6107 777.391 55.6107C1193.04 55.6107 1322.46 54.8729 1440 0V465H0V110.433Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            y1="0"
            x2="720"
            y2="465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6C744" />
            <stop offset="1" stopColor="#F68F44" stopOpacity="0.53" />
          </linearGradient>
        </defs>
      </WaveSVG>
    </WaveContainer>
  );
};

export default WaveBackground;
