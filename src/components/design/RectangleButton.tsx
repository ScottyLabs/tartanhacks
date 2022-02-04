import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactElement } from "react";

const StyledButton = styled(Button)({
  backgroundColor: "#F7C062",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(219, 121, 52, 0.5)",
  color: "white",
  "&:hover": {
    backgroundColor: "#e0ac52",
  },
});

const RectangleButton = ({
  className,
  children,
  type,
  onClick,
  startIcon,
  backgroundColor,
}: {
  className?: string;
  children?: ReactElement | string;
  type: "button" | "reset" | "submit" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  startIcon?: ReactElement | undefined;
  backgroundColor?: string;
}): ReactElement => {
  return (
    <>
      <StyledButton
        variant="contained"
        type={type}
        className={className}
        startIcon={startIcon}
        onClick={onClick}
        sx={{ backgroundColor }}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default RectangleButton;
