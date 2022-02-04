import { Computer } from "@mui/icons-material";
import { Button, IconButton, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { ReactElement } from "react";
import RectangleButton from "../design/RectangleButton";

const Dialog = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
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

const DialogContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "4em",
  fontWeight: 600,
  color: theme.palette.text.primary,
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "2.5em",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2em",
  fontWeight: 500,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    fontSize: "1.5em",
  },
  marginBottom: "1em",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "1.5em",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
}));

const DashboardDialog = (): ReactElement => {
  return (
    <Dialog>
      <DialogContent>
        <Heading variant="h2">TartanHacks</Heading>
        <SubHeading variant="h5">Feb 4-6, 2022</SubHeading>
        <ButtonContainer>
          <Link
            href="https://play.google.com/store/apps/details?id=org.scottylabs.thdapp"
            target="_blank"
          >
            <Image
              alt="Get it on Google Play"
              src="/google-play-badge.svg"
              width={563 * (40 / 168)}
              height={40}
            />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/scottylabs-dashboard/id1556362423"
            target="_blank"
          >
            <Image
              alt="Download on the App Store"
              src="/ios-app-store-badge.svg"
              width={120}
              height={40}
            />
          </Link>
          <Link
            href="https://dashboard.tartanhacks.com/"
            target="_blank"
            underline="none"
          >
            <RectangleButton
              type="button"
              startIcon={<Computer />}
              backgroundColor="#000"
            >
              Web
            </RectangleButton>
          </Link>
        </ButtonContainer>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardDialog;
