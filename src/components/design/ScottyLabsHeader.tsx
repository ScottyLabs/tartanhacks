import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactElement } from "react";

const PageHeader = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "3%",
  top: "4%",
  whiteSpace: "nowrap",
  width: "5%",
  [theme.breakpoints.down("md")]: {
    width: "10%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "20%",
  },
}));

const ScottyLabsHeader = (): ReactElement => {
  return (
    <PageHeader>
      <Link href="/">
        <svg
          width="100%"
          viewBox="0 0 864 739"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m60.057 304.998 147.469 31.404 47.129-221.311L59.757 73.587c-56.911 94.334-28.023 183.709.3 231.411Z"
            fill="#000"
          />
          <mask
            id="logo_svg__a"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={410}
            y={0}
            width={168}
            height={174}
          >
            <path
              transform="scale(1 -1) rotate(47.978 429.829 442.518)"
              fill="#000"
              d="M0 0h159.219v81.778H0z"
            />
          </mask>
          <g mask="url(#logo_svg__a)">
            <ellipse
              rx={78.326}
              ry={80.459}
              transform="scale(1 -1) rotate(47.978 297.89 490.962)"
              fill="#000"
            />
          </g>
          <mask
            id="logo_svg__b"
            style={{
              maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={713}
            y={299}
            width={151}
            height={180}
          >
            <path
              transform="scale(-1 1) rotate(-60 -53.368 966.85)"
              fill="#000"
              d="M0 0h159.218v81.777H0z"
            />
          </mask>
          <g mask="url(#logo_svg__b)">
            <ellipse
              rx={78.325}
              ry={80.458}
              transform="scale(-1 1) rotate(-60 -22.155 856.908)"
              fill="#000"
            />
          </g>
          <path
            d="M789.04 546.243c.001-79.521-64.464-143.987-143.985-143.987H450.881V665.27h338.157l.002-119.027ZM264.333 117l219.83 46.814-34.33 161.208-219.83-46.813L264.333 117Z"
            fill="#000"
          />
          <path
            d="m227.923 287.979 219.83 46.813-10.923 51.294L217 339.272l10.923-51.293Z"
            fill="#DB4D20"
          />
          <path
            d="m216.6 727.154 223.23-33.153v-294.46L216.6 355.84v371.314ZM450.88 674.111v19.811l338.161 44.285v-64.096H450.88Z"
            fill="#000"
          />
        </svg>
      </Link>
    </PageHeader>
  );
};

export default ScottyLabsHeader;
