import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

const Section = styled("div")(({ theme }) => ({
  minHeight: "50vh",
  backgroundImage: `linear-gradient(${theme.palette.waveGradient.end}87, ${theme.palette.waveGradient.start} 80%)`,
  paddingTop: "5em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3em",
  paddingBottom: "5em",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    minHeight: "80vh",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "4em",
  fontWeight: 600,
  color: "white",
  textShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "2.5em",
  },
}));

const Dialog = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60%",
  borderRadius: "25px",
  padding: "2em",
  margin: "0 auto",
  flexDirection: "column",
  backgroundImage: `linear-gradient(316.54deg, rgba(255, 227, 227, 0.90) 
    35.13%, rgba(255, 255, 255, 0.95) 126.39%)`,
  boxShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  backdropFilter: "blur(4px)",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    width: "80%",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    width: "70%",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: "bold",
  display: "inline",
  position: "relative",
  overflow: "hidden",

  "&:after": {
    content: "''",
    position: "absolute",
    zIndex: 1,
    right: 0,
    width: 0,
    bottom: "-2px",
    background: theme.palette.secondary.main,
    height: "1px",
    transitionProperty: "width",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease-out",
  },
  "&:is(:hover,:focus,:active):after": {
    left: 0,
    right: "auto",
    width: "100%",
  },
}));

const DialogText = styled(Typography)({
  fontSize: "1.2em",
});

const AboutSection = (): ReactElement => {
  return (
    <Section id="about">
      <Heading variant="h2">About</Heading>
      <Dialog>
        <DialogText>
          Tartanhacks is the largest hackathon at CMU! Organized by&nbsp;
          <StyledLink
            href="http://scottylabs.org/"
            target="_blank"
            underline="none"
          >
            ScottyLabs
          </StyledLink>
          , it&apos;s a hackathon where, in 36 hours, participants from all over
          the country work in groups to create innovative projects. This year,
          Tartanhacks will be hybrid, with an in-person option for CMU students.
          Come on over to hack, learn new concepts through our virtual
          workshops, and meet other hackers!
        </DialogText>
      </Dialog>
    </Section>
  );
};

export default AboutSection;
