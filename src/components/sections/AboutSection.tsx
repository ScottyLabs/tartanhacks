import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement, useState } from "react";

const Section = styled("div")(({ theme }) => ({
  minHeight: "50vh",
  backgroundImage: `linear-gradient(#F68F4487, #F6C744FF 80%)`,
  paddingTop: "5em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3em",
  paddingBottom: "5em",
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
          <Link href="http://scottylabs.org/" target="_blank" underline="none">
            ScottyLabs
          </Link>
          , it&apos;s a hackathon where, in 36 hours, participants from all over the
          country work in groups to create innovative projects. This year,
          Tartanhacks will be hybrid, with an in-person option for CMU students.
          Come on over to hack, learn new concepts through our virtual
          workshops, and meet other hackers!
        </DialogText>
      </Dialog>
    </Section>
  );
};

export default AboutSection;
