import {
  Typography,
  Card,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactElement, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Section = styled("div")(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.palette.waveGradient.start}, ${theme.palette.waveGradient.end}87)`,
  alignItems: "center",
  paddingTop: "5em",
  display: "flex",
  flexDirection: "column",
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

const PrizeName = styled(Typography)(({ theme }) => ({
  margin: "0 auto",
  fontSize: "2.5em",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1.8em",
  },
  marginBottom: "20px"
}));

const PrizeDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.3em",
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "0.8em",
  },
  marginBottom: "15px",
  whiteSpace: "pre-line"
}));

const Prize = styled(Typography)(({ theme }) => ({
  fontSize: "1.2em",
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1em",
  },
  marginBottom: "30px"
}));

const Prizes = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "center",
  flex: 1,
  gap: "5em",
  width: "90%"
}));

const StyledImage = styled("img")(({ theme }) => ({
  height: "70px",
  objectFit: "contain",
  borderRadius: "5px",
  marginTop: "auto",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    height: "50px",
  }
}));

const Text = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  display: "flex",
  padding: "1em 2em 1em 2em",
  borderRadius: "1em",
  maxWidth: "25%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "2.5em",
  marginTop: "2.5em",
  backgroundImage: `linear-gradient(316.54deg, rgba(255, 255, 255, 0.85) 35.13%, rgba(255, 232, 172, 0.85) 126.39%)`,
  boxShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  backdropFilter: "blur(4px)",
  "&.MuiAccordion-root:before": {
    display: "none",
  },
  "&.MuiAccordion-root:first-of-type": {
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  "&.MuiAccordion-root.Mui-expanded:first-of-type": {
    marginTop: "16px",
  },
  "&.MuiAccordion-root:last-of-type": {
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  "&.Mui-expanded": {
    justifyContent: "left"
  },
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    maxWidth: "70%"
  },
  flexGrow: 1,
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({

}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignSelf: "center",
  flexGrow: "1",
  position: "relative",
}));

const sponsorLogos = {
  "ScottyLabs": {
    src: "scottylabs.png",
    alt: "Scotty Labs"
  },
  "Oracle": {
    src: "oracle.png",
    alt: "Oracle"
  },
  "CapitalOne": {
    src: "capital-one.png",
    alt: "Capital One"
  },
  "Figma": {
    src: "figma.png",
    alt: "Figma"
  },
  "Meta": {
    src: "meta.gif",
    alt: "Meta"
  },
  "GoogleCloud": {
    src: "gcp.png",
    alt: "Google Cloud"
  }
}

const PrizesSection = (): ReactElement => {
  const prizes = [
    {
      name: "Spiciest Meme Award",
      description: "Post the 🌶️iest memes on #memes in Discord",
      prize: "What Do You Meme? Card game",
      sponsor: "ScottyLabs"
    },
    {
      name: "First Penguin Award",
      description: `Inspired by Randy Pausch’s The Last Lecture: 
      “Experience is what you get when you don’t get what you wanted. And it can be the most valuable thing you have to offer.”
      Awarded to the team that took the biggest gamble while not meeting its goals… a prize for ‘glorious failure’.`,
      prize: "Super cute penguin plushies",
      sponsor: "ScottyLabs"
    },
    {
      name: "Best Travel Hack",
      description: "Awarded to the team with the best travel related hack!",
      prize: "4 x travel packs with a film camera and travel essentials",
      sponsor: "ScottyLabs"
    },
    {
      name: "Scott Krulcik Grand Prize",
      description: "The prize for the most impressive hack at TartanHacks 2022",
      prize: "$2,000 per team",
      sponsor: "ScottyLabs"
    },
    {
      name: "Best use of Oracle Autonomous Database",
      description: "Awarded to the the team with the best use of Oracle Autonomous Database",
      prize: "Ultimate Ears Portable Waterproof Speakers plus $5,000 in Oracle Cloud credits for 1 year",
      sponsor: "Oracle"
    },
    {
      name: "Make the World a Better Place with Oracle Cloud",
      description: "Awarded to the Team that uses Oracle Cloud to make the best community project.",
      prize: "Oracle Swag Bag complete with a hoodie, journal, and socks",
      sponsor: "Oracle"
    },
    {
      name: "Capital One Financial Hack",
      description: "Awarded to the team with the hack with the best Financial Hack",
      prize: "$250 gift card per team member",
      sponsor: "CapitalOne"
    },
    {
      name: "Figma Best Design Award",
      description: "Awarded to the team with the Best Design",
      prize: "$400 prize",
      sponsor: "Figma"
    },
    {
      name: "Meta Community Award",
      description: "Awarded to the project with the best community hack",
      prize: "4 Portals",
      sponsor: "Meta"
    },{
      name: "Best Use of Google Cloud",
      description: "Best Use of Google Cloud",
      prize: "2 winning teams will receive Google Cloud Swag",
      sponsor: "GoogleCloud"
    },
    {
      name: "Secret prize",
      description: "???",
      prize: "Cool stuff",
      sponsor: "ScottyLabs"
    }
  ]

  return (
    <Section id="prizes">
      <Heading variant="h2">Prizes</Heading>
      <Prizes>
        {prizes.map((prize, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <PrizeName>{prize.name}</PrizeName>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Text>
                <PrizeDescription>{prize.description}</PrizeDescription>
                <Prize>Prize: {prize.prize}</Prize>
              </Text>
              <StyledImage
                src={`/sponsors/${sponsorLogos[prize.sponsor as keyof typeof sponsorLogos].src}`} />
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </Prizes>
    </Section>
  );
};

export default PrizesSection;
