import { Link, styled, Typography } from "@mui/material"
import { ReactElement } from "react"
import NextLink from "next/link"

const StyledLink = styled(Link)(({ theme }) => ({
  "&:hover": {
    textDecoration: "none",
    filter: "brightness(85%)",
    cursor: "pointer"
  },
  color: "white",
  width: "100%"
}))

const StyledMenuItem = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: "2em"
}))

const MenuItem = ({
  text,
  url
}: {
  text: string
  url: string
}): ReactElement => {
  return (
    <NextLink href={url} passHref>
      <StyledLink>
        <StyledMenuItem>
          <Typography variant="h5">{text}</Typography>
        </StyledMenuItem>
      </StyledLink>
    </NextLink>
  )
}

export default MenuItem
