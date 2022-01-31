import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

const Section = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.waveGradient.start,
  color: "white",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  padding: "1em",
}));

const Footer = (): ReactElement => {
  return <Section id="footer">
    <Typography>&copy; ScottyLabs 2022</Typography>
  </Section>;
};

export default Footer;
