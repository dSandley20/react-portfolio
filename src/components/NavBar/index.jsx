import { AppBar, Box, Menu, MenuItem, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography>{currentPage}</Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              color="white"
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  changeText("Portfolio");
                }}
              >
                Portfolio
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  changeText("Blogs");
                }}
              >
                Blogs
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  changeText("Projects");
                }}
              >
                Projects
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
