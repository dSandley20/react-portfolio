import { AppBar, Box, Menu, MenuItem, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Socials from "../Socials";

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState("Portfolio");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeText = (page) => {
    setCurrentPage(page);
    //All to lowercase to make url cleaner
    navigate(`../${page.toLowerCase()}`, { replace: true });
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useMemo(() => {
    setIsMobile(width <= 1000);
  }, [width]);

  return (
    <>
      <Box>
        <AppBar color="nord7" position="static" sx={{ height: "55px" }}>
          <Toolbar sx={{ height: "100%" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              variant={isMobile ? "" : "navbar"}
              onClick={handleClick}
              color="nord4"
            >
              <MenuIcon />
            </IconButton>
            <Typography color="nord4" variant={isMobile ? "" : "navbar"}>
              {isMobile ? "" : currentPage}
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              variant="navbar"
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                variant="navbar"
                onClick={() => {
                  handleClose();
                  changeText("Portfolio");
                }}
              >
                Portfolio
              </MenuItem>
              <MenuItem
                variant="navbar"
                onClick={() => {
                  handleClose();
                  changeText("Blogs");
                }}
              >
                Blogs
              </MenuItem>
              <MenuItem
                variant="navbar"
                onClick={() => {
                  handleClose();
                  changeText("Projects");
                }}
              >
                Projects
              </MenuItem>
            </Menu>
            <Socials isMobile={isMobile} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
