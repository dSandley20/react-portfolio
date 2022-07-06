import { AppBar, Box, Menu, MenuItem, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

export default function KitchenSink() {

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentPage, setCurrentPage] = useState("Portfolio")
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
        navigate(`../${page.toLowerCase()}`, {replace : true})
    }

    //card properties
    const mainCardStyle = {padding : "3rem 5rem",borderRadius: '1rem' , backgroundColor: 'blue', boxShadow: '0px 10px 30px rgb(0,0,0,0.5)'}
    const cardTextStyle = {paddingTop : "1rem", lineHeight: "150% "}
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* <Box>
                <AppBar position="static" color="accent">
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
                        <Typography color="highlight">
                            {currentPage}
                        </Typography>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            color="white"
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>
                            <MenuItem onClick={() => {
                                handleClose()
                                changeText("Portfolio")
                            }}>
                                Portfolio
                            </MenuItem>
                            <MenuItem onClick={() => {
                                handleClose()
                                changeText("Blogs")
                            }}>
                                Blogs
                            </MenuItem>
                            <MenuItem onClick={() => {
                                handleClose()
                                changeText("Projects")
                            }}>
                                Projects
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box> */}

            <Box color="accent">
                <Box transition={{layout : {duration : .5}}} 
                    layout={true}
                    component={motion.div} 
                    sx={mainCardStyle} 
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <Typography layout={"position"} variant='h2' component={motion.h2}>Testing</Typography>
                        {isOpen && (
                            <Box initial={{opacity: 0}} animate={{opacity: 1}} component={motion.div} transition={{duration: 1}} sx={cardTextStyle}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!</p>
                            </Box>
                        )}
                </Box>
            </Box>
        </>
    )
}