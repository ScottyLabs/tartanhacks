import { Card, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

const Section = styled("div")(({ theme }) => ({
  backgroundImage: `linear-gradient(${theme.palette.waveGradient.end}, ${theme.palette.waveGradient.start})`,
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

const SpeakerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "5em",
  width: "60%",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    flexDirection: "column",
    width: "90%",
  },
}));

const StyledCard = styled(Card)({
  padding: "1em 2em 1em 2em",
  borderRadius: "1em",
});

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  height: "18rem",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    height: "10rem",
  },
}));

const SpeakerName = styled(Typography)(({ theme }) => ({
  fontSize: "2.5em",
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1.8em",
  },
}));

const SpeakerSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5em",
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1em",
  },
}));

const SpeakerBio = styled(Typography)(({ theme }) => ({
  fontSize: "1em",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "0.8em",
  },
}));

const speakers = [
  {
    image: "/speakers/nita_singh_kaushal.jpg",
    name: "Nita Singh Kaushal",
    subtitle: "Founder of Miss CEO",
    bio: `Nita Singh Kaushal is the Founder of Miss CEO, a company that
    empowers students and women with world-class leadership training,
    mentorship, and career exploration opportunities. Since its founding
    in 2011, Miss CEO has trained over fifty thousand children, young
    women, and professionals all over the world. Nita is currently a
    Lecturer in the School of Engineering at Stanford University and an
    Instructor at Stanford Continuing Studies where she teaches
    undergraduate and graduate students as well as professional women
    how to develop leadership skills so they can make meaningful
    contributions in their careers. Nita also proudly serves on the
    Girls at the Tech Leadership Council.`,
  },
  {
    image: "/speakers/po_shen_loh.jpg",
    name: "Po-Shen Loh",
    subtitle: "Creator of NOVID and expii.com, Professor at Carnegie Mellon",
    bio: `Po-Shen Loh is a social entrepreneur, working across the spectrum
    of mathematics, education, and healthcare, all around the world.
    He is the founder of the free personalized learning platform
    expii.com, a social enterprise supported by his series of online
    math courses that reinvent the middle school math curriculum with
    a focus on creative thinking. He is also a math professor at
    Carnegie Mellon University and the national coach of the USA
    International Mathematical Olympiad team. Upon the outbreak of
    COVID-19, he turned his mathematical attention to create NOVID,
    the world's first app to introduce the fundamentally different
    network radar paradigm for pandemic control.`,
  },
  {
    image: "/speakers/jasmine_lawrence.jpg",
    name: "Jasmine Lawrence",
    subtitle: "Engineer & Entrepreneur",
    bio: `Jasmine Lawrence is an experienced Product Manager and Entrepreneur
    with a passion for both consumer technology and business strategy.
    Whether it's building devices or formulating beauty products, she
    focuses on creating delightful experiences that make a difference in
    people's lives.`,
  },
];

const SpeakerSection = (): ReactElement => {
  return (
    <Section id="speakers">
      <Heading variant="h2">Speakers</Heading>
      {speakers.map((speaker, index) => (
        <SpeakerContainer key={index}>
          <StyledImage src={speaker.image} alt={speaker.name} />
          <StyledCard>
            <SpeakerName>{speaker.name}</SpeakerName>
            <SpeakerSubtitle>{speaker.subtitle}</SpeakerSubtitle>
            <br />
            <SpeakerBio>{speaker.bio}</SpeakerBio>
          </StyledCard>
        </SpeakerContainer>
      ))}
    </Section>
  );
};

export default SpeakerSection;
