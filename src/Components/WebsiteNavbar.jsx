import React, { useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  IconButton,
  Stack,
  Toolbar,
  Menu,
  MenuItem,
  Dialog,
} from "@mui/material";
import { Menu as MenuIcon, Place as PlaceIcon, Facebook } from "@mui/icons-material";
import useWindowWidth from "../Hooks/WindowWidth";
import SunshineDentalCardImg from "../img/sunshine_dental_card.jpg";

const classes = {
  BottomDivider: {
    backgroundColor: "#494c64",
    borderBottomWidth: 1,
  },
  Toolbar: {
    backgroundColor: "#F5F5F5",
    justifyContent: "center", // Center children
  },
  TopToolbar: {
    backgroundColor: "#009BE5",
  },
  ToolbarContent: {
    // Used for content inside Toolbar
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  ToolbarButtonHover: {
    "&:hover": {
      backgroundColor: "#00B300",
    },
  },
  ToolbarIcon: {
    fontSize: "1.5rem",
    maxWidth: "1.5rem",
    maxHeight: "1.5rem",
  },
  MenuPaper: {
    backgroundColor: "#DDD", // Menu background color
    border: "1px solid rgb(73, 76, 100)",
  },
  MenuItem: {
    borderBottom: "1px solid rgb(73, 76, 100)",
    padding: "12.5px",
  },
};

const scrollWithOffset = (el) => {
  const yOffset = -165; // Adjust this value to your navbar's height
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function WebsiteNavbar() {
  const wide = useWindowWidth(700);
  const [menuOpen, setMenuOpen] = useState(false);
  const toolbarRef = useRef(null); // Reference for the second Toolbar
  const location = useLocation(); // Get the current location
  const hasAnnouncement = false;

  const handleMenuClick = () => {
    setMenuOpen(true); // Open the menu
  };

  const handleMenuClose = () => {
    setMenuOpen(false); // Close the menu
  };

  const isActive = (path) => {
    // Exact match for the home path without a hash
    if (path === "/#" && location.pathname === "/" && !location.hash) {
      return true;
    }

    // Exact match for hash-based paths (like Classes or Tuition sections)
    if (path.startsWith("/#")) {
      const [pathname, hash] = path.split("#");
      return location.pathname === pathname && location.hash === `#${hash}`;
    }

    // Handle non-hash paths that might end with "/#"
    if (!path.includes("#") || path.endsWith("/#")) {
      const normalizedPath = path.endsWith("/#") ? path.slice(0, -1) : path; // Remove "/#" from the end
      return location.pathname === normalizedPath;
    }

    return false; // Default return false if none of the conditions match
  };

  const navItems = [
    { name: "Home", link: "/#" },
    { name: "Team", link: "/#team" },
    { name: "Contact Us", link: "/#contact" },
    { name: "Services", link: "/#services" },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" sx={{ ...classes.Toolbar, ...classes.TopToolbar }}>
        <Box sx={{ ...classes.ToolbarContent, justifyContent: "flex-start" }}>
          <IconButton
            color="inherit"
            sx={{ ...classes.ToolbarButtonHover }}
            component={Link}
            to={
              "https://www.google.com/maps/dir//Sunshine+Dental+1761+E+Warner+Rd+%23+14+Tempe,+AZ+85284/@33.3333036,-111.9116361,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x872b06e4b7a2cc41:0x96403a75381fb0b1"
            }
          >
            <PlaceIcon sx={{ ...classes.ToolbarIcon }} />
          </IconButton>
          <Typography
            component={Link}
            to="https://www.google.com/maps/dir//Sunshine+Dental+1761+E+Warner+Rd+%23+14+Tempe,+AZ+85284/@33.3333036,-111.9116361,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x872b06e4b7a2cc41:0x96403a75381fb0b1"
            sx={{ fontSize: { xs: '12px', }, textDecoration: 'none', color: 'inherit', }}
          >
            1761 E. Warner Rd. Suite A-14 Tempe, AZ 85284
          </Typography>
        </Box>
        <Box sx={{ ...classes.ToolbarContent, justifyContent: "flex-end" }}>
          <IconButton
            color="inherit"
            sx={{ ...classes.ToolbarButtonHover }}
            component={Link}
            to={"https://www.facebook.com/SunshineDentalTempe/"}
          >
            <Facebook sx={{ ...classes.ToolbarIcon }} />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider sx={classes.BottomDivider} />
      <Toolbar ref={toolbarRef} sx={classes.Toolbar}>
        <Box sx={{ ...classes.ToolbarContent }}>
          <IconButton
            component={Link}
            to={"/#"}
            sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
          >
            <Avatar
              src={SunshineDentalCardImg}
              alt="Sunshine Dental Business Card"
              sx={wide ? { width: 99, height: 99 } : { width: 56, height: 56 }}
            />
          </IconButton>
          {wide ? (
            <Stack direction="row" spacing={1} sx={{ marginLeft: "auto" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{
                    textTransform: "none",
                    color: item.textColor || "#fff",
                    backgroundColor: "#009BE5",
                    fontSize: {
                      md: "13px",
                    },
                    border: "none",
                    // border: isActive(item.link) ? "2px solid #000" : "none",
                  }}
                  component={Link}
                  to={item.link}
                  scroll={scrollWithOffset}
                  variant="contained"
                  size="small"
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
          ) : (
            <IconButton
              color="#000"
              aria-label="open menu"
              edge="end"
              onClick={handleMenuClick}
              sx={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Menu
        anchorEl={toolbarRef.current}
        open={!wide && menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: classes.MenuPaper,
        }}
        MenuListProps={{
          style: {
            padding: 0, // Remove default padding for full width effect
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "90%", // Make Menu full width
            maxWidth: "100%", // Ensure it doesn't exceed the viewport width
            left: 0,
            right: 0,
            top: "auto",
            transform: "none", // Overrides default positioning to remove offset
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={handleMenuClose}
            component={Link}
            to={item.link}
            scroll={scrollWithOffset}
            sx={{
              ...classes.MenuItem,
              backgroundColor: isActive(item.link) ? "#FFF" : "inherit",
              borderLeft: isActive(item.link) && "3px solid #009BE5",
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}
