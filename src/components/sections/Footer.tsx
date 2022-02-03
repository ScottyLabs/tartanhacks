import { Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { ReactElement } from "react";
import Email from "public/socials/mail.svg";
import Facebook from "public/socials/facebook.svg";
import Instagram from "public/socials/instagram.svg";
import Twitter from "public/socials/twitter.svg";

const Section = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
  bottom: 0,
  position: "relative",
  display: "flex",
  padding: "1em",
}));

const SideContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "1em",
  float: "right",
  right: 20,
  position: "absolute",
}));

const CenterContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  left: 0,
  right: 0,
});

const Footer = (): ReactElement => {
  const iconSize = 24;
  return (
    <Section id="footer">
      <CenterContainer>
        <Typography>&copy; ScottyLabs 2022</Typography>
      </CenterContainer>
      <SideContainer>
        <Link href="mailto:tartanhacks@scottylabs.org" target="_blank">
          <Image src={Email} width={iconSize} height={iconSize} alt="Email" />
        </Link>
        <Link href="https://www.facebook.com/ScottyLabs" target="_blank">
          <Image
            src={Facebook}
            width={iconSize}
            height={iconSize}
            alt="Facebook"
          />
        </Link>
        <Link href="https://www.instagram.com/cmu.scottylabs" target="_blank">
          <Image
            src={Instagram}
            width={iconSize}
            height={iconSize}
            alt="Instagram"
          />
        </Link>
        <Link href="https://twitter.com/TartanHacks" target="_blank">
          <Image
            src={Twitter}
            width={iconSize}
            height={iconSize}
            alt="Twitter"
          />
        </Link>
      </SideContainer>
    </Section>
  );
};

export default Footer;
