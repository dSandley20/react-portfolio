import { AppBar, Box, Menu, MenuItem, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Socials from "../Socials";
import PropTypes from "prop-types";

export default function NavBar(props) {
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
              variant={props.isMobile ? "" : "navbar"}
              onClick={handleClick}
              color="nord4"
            >
              <MenuIcon />
            </IconButton>
            <Typography color="nord4" variant={props.isMobile ? "" : "navbar"}>
              {props.isMobile ? "" : currentPage}
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
            <Socials isMobile={props.isMobile} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

NavBar.propTypes = {
  isMobile: PropTypes.bool,
};
