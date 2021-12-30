import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

const Dialog = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  borderRadius: "25px",
  padding: "2em",
  margin: "0 auto",
  flexDirection: "column",
  backgroundImage: `linear-gradient(316.54deg, rgba(255, 227, 227, 0.7565) 
    35.13%, rgba(255, 255, 255, 0.85) 126.39%)`,
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

const DashboardDialog = (): ReactElement => {
  return (
    <Dialog>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default DashboardDialog;
