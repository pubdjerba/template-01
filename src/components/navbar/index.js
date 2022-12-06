import React from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import AppbarDesktop from "./AppbarDesktop"
import AppbarMobile from "./AppbarMobile"

const Navbar = ({ siteTitle }) => {
  const matches = useMediaQuery("(min-width:600px)")

  return (
    <>
      {matches ? (
        <AppbarDesktop siteTitle={siteTitle} />
      ) : (
        <AppbarMobile siteTitle={siteTitle} />
      )}
    </>
  )
}

export default Navbar
