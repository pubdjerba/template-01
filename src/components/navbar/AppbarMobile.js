import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { AppBar, Divider, Toolbar, Typography } from "@mui/material"
import { menuItems } from "./menuItems"

export default function TemporaryDrawer({ siteTitle }) {
  const [state, setState] = React.useState(false)
  const anchor = "left"
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "3.5vw",
          fontWeight: "400",
          py: 1,
        }}
      >
        MENU
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton component="a" href={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MenuIcon
          onClick={toggleDrawer(anchor, true)}
          sx={{
            cursor: "pointer",
          }}
        />
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>

        <Typography>{siteTitle}</Typography>
      </Toolbar>
    </AppBar>
  )
}
