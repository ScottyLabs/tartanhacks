import { styled } from "@mui/material/styles";
import { Modal } from "@mui/material";
import { ReactElement, useState } from "react"
import BurgerMenu from "./BurgerMenu"
import MenuItem from "./MenuItem";
import MenuLine from "./MenuLine"

const BurgerWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  marginTop: "3%",
  marginRight: "3%",
  cursor: "pointer",
  padding: "0",
  zIndex: 2000,
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    marginTop: "5%",
    marginRight: "5%"
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    marginTop: "8%",
    marginRight: "5%"
  }
}))

const Burger = styled(BurgerMenu)(({ theme }) => ({
  height: "3rem",
  width: "3rem",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    height: "3rem",
    width: "3rem"
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    height: "2rem",
    width: "2rem"
  }
}))

const MenuWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "0",
  width: "100%"
}))

const MenuBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "15%",
  padding: "1em",
  background: `${theme.palette.text.primary}`,
  boxShadow: "0px 4px 4px rgba(219, 121, 52, 0.5)",
  borderRadius: "10px",
  position: "absolute",
  top: "8em",
  right: "5em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    width: "25%"
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    width: "50%"
  }
}))

const MenuBurgerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
}))

const Menu = (): ReactElement => {
  const [open, setOpen] = useState(false)
  const handleSwitch = () => setOpen(!open)
  const handleClose = () => setOpen(false)

  return (
    <MenuBurgerContainer>
      <BurgerWrapper>
        <Burger onClick={handleSwitch} />
      </BurgerWrapper>
      <Modal open={open} onClose={handleClose}>
        <MenuWrapper>
          <MenuBox>
            <MenuItem text="ABOUT" url="#about" />
            <MenuLine />
            <MenuItem text="SCHEDULE" url="#schedule" />
            <MenuLine />
            <MenuItem text="SPEAKERS" url="#speakers" />
            <MenuLine />
            <MenuItem text="FAQs" url="#faq" />
            <MenuLine />
            <MenuItem text="SPONSORS" url="#sponsors" />
          </MenuBox>
        </MenuWrapper>
      </Modal>
    </MenuBurgerContainer>
  )
}

export default Menu
