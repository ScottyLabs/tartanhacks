import { Link, makeStyles, Typography, styled } from "@mui/material"
import { ReactElement } from "react"

const StyledMenuLine = styled("svg")(({ theme }) => ({
  menuLine: {
    position: "relative",
    width: "100%",
    height: "7px"
  }
}))

const MenuLine = (): ReactElement => {
  return (
    <StyledMenuLine viewBox="0 0 422 7">
      <line
        x1="3.5"
        y1="3.5"
        x2="418.5"
        y2="3.5"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </StyledMenuLine>
  )
}

export default MenuLine
