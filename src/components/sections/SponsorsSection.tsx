import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";
import Image from "next/image";
import capitalOne from "public/sponsors/capital-one.png";
import figma from "public/sponsors/figma.png";
import gcp from "public/sponsors/gcp.png";
import hrt from "public/sponsors/hrt.png";
import meta from "public/sponsors/meta.gif";
import oracle from "public/sponsors/oracle.png";
import replit from "public/sponsors/replit.png";
import wayfair from "public/sponsors/wayfair.png";

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

const CategoryHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3em",
  fontWeight: 600,
  color: "white",
  textShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "2em",
  },
}));

const PrizeSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5em",
  padding: 0,
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    gap: "3em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    flexDirection: "column",
    gap: "2em",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  height: "70px",
  objectFit: "contain",
  borderRadius: "5px",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    height: "50px",
  },
}));

const sponsors = {
  silver: [
    { name: "Wayfair", path: "wayfair.png", href: "https://www.wayfair.com/" },
    { name: "Oracle", path: "oracle.png", href: "https://www.oracle.com/" },
    {
      name: "Capital One",
      path: "capital-one.png",
      href: "https://www.capitalone.com/",
    },
  ],
  bronze: [
    {
      name: "HRT",
      path: "hrt.png",
      href: "https://www.hudsonrivertrading.com/",
    },
    { name: "Figma", path: "figma.png", href: "https://www.figma.com/" },
  ],
  special: [
    { name: "Meta", path: "meta.gif", href: "https://www.facebook.com/" },
  ],
  kind: [
    {
      name: "Google Cloud",
      path: "gcp.png",
      href: "https://cloud.google.com/",
    },
    { name: "Repl.it", path: "replit.png", href: "https://replit.com/" },
  ],
};

const tiers = ["Silver", "Bronze", "Special", "Kind"];

const SponsorsSection = (): ReactElement => {
  return (
    <Section id="about">
      <Heading variant="h2">Sponsors</Heading>
      {tiers.map((tier: string, index) => {
        const key = tier.toLowerCase() as keyof typeof sponsors;
        return (
          <>
            <CategoryHeading variant="h4" key={index}>
              {tier}
            </CategoryHeading>
            <PrizeSection key={index}>
              {sponsors[key].map((sponsor, idx) => (
                <a
                  href={sponsor.href}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledImage
                    key={idx}
                    src={`/sponsors/${sponsor.path}`}
                    alt={sponsor.name}
                  />
                </a>
              ))}
            </PrizeSection>
          </>
        );
      })}
    </Section>
  );
};

export default SponsorsSection;
