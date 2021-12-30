import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement, useState } from "react";

const Section = styled("div")(({ theme }) => ({
  height: "100vh",
  backgroundImage: `linear-gradient(#F68F4487, #F6C744FF 80%)`,
  paddingTop: "5em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3em",
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

const Questions = styled("div")(({ theme }) => ({
  width: "80%",
}));

const StyledAccordionContent = styled(AccordionDetails)({
  backgroundColor: "#f0f0f0",
});

const faqs = [
  {
    question: "How much does it cost to participate in TartanHacks?",
    answer: "Nothing. TartanHacks is free for all undergraduate students!",
  },
  {
    question: "I'm not a CS major, can I still join?",
    answer: `Yes! All undergradauate majors and programs, even if they aren't
    technical, are welcome at TartanHacks. We have slides from a
    series of web development workshops online that you can use to
    brush up your skills! We'll also have some workshops during the
    event so you can get started with new frameworks.`,
  },
  {
    question: "Is TartanHacks open to first-year students?",
    answer: `Yes! We welcome students of all skill levels to participate.
    First-year students and first-time hackers have always been part
    of TartanHacks; we would love to see you at the event! Some
    prizes will also be specific for beginner hackers.`,
  },
  {
    question: "I'm a graduate student. Can I still participate?",
    answer: `Unfortunately, graduate students cannot participate. TartanHacks
    is currently limited to undergraduate students only.`,
  },
  {
    question: "Are non-CMU students allowed to attend?",
    answer: "Absolutely! Just sign up :)",
  },
  {
    question: "Can I register with a team?",
    answer: `You have to sign up as an individual for the event, and we'll
    have you specify your team later on. Don't worry, if you already
    have a team chosen you'll still be able to work with them during
    event.`,
  },
  {
    question:
      "If I don't have a team before the event, can I still participate?",
    answer: `Absolutely! We'll have a team mixer after the opening ceremony
    to help you meet new hackers.`,
  },
  {
    question: "How many people can we have per team?",
    answer: "Up to 4 people are allowed.",
  },
  {
    question: `Does everyone who registers get to participate at TartanHacks?`,
    answer: `We expect that everyone who registers can get in. However,
    sometimes more hackers sign up than we can admit. Once
    registration closes, hackers are accepted on a rolling basis.
    You will be notified via email about your registration status.`,
  },
  {
    question: `I got in, but a few of my team members were put on the waitlist.
    Will they be able to participate?`,
    answer: `Hackers are accepted individually, so we are unable to guarantee
    that all members of your team will get in. However, if they're
    on the waitlist, there's still hope! See the next question.`,
  },
  {
    question: `Is there a way to get off of the waitlist?`,
    answer: `We will be letting hackers off the waitlist on a first-come,
    first-serve basis on the day of the event. Historically, many
    people have gotten off the waitlist.`,
  },
  {
    question: `Are we limited to software projects or are hardware hacks allowed?`,
    answer: `We will have a team of student and corporate mentors on hand who
    are experts in many common technologies. They'll be able to
    answer your questions, help you debug, and get you set up with
    new frameworks. They can't make your project for you, but they
    are always there to help!`,
  },
  {
    question: `Who runs TartanHacks?`,
    answer: `TartanHacks is run by
    ScottyLabs, a student organization at Carnegie Mellon University that
    develops apps for CMU and runs educational events, like
    TartanHacks. ScottyLabs isn't affiliated with any academic
    department, and all of our funding comes from corporate
    sponsors.`,
  },
];

const FAQSection = (): ReactElement => {
  const [expanded, setExpanded] = useState(-1);

  return (
    <Section>
      <Heading variant="h2">FAQs</Heading>
      <Questions>
        {faqs.map(({ question, answer }, idx) => (
          <Accordion
            expanded={expanded === idx}
            onChange={(e, isExpanded) => {
              setExpanded(isExpanded ? idx : -1);
            }}
            disableGutters
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{question}</Typography>
            </AccordionSummary>
            <StyledAccordionContent>
              <Typography>{answer}</Typography>
            </StyledAccordionContent>
          </Accordion>
        ))}
      </Questions>
    </Section>
  );
};

export default FAQSection;
