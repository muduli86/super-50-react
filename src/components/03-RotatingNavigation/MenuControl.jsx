import React, { useState } from "react";

import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const options = ["Home", "About", "Contact"];

const MenuControl = ({ setRotate }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const ITEM_HEIGHT = 48;

  const handleClose = () => {
    setAnchorEl(null);
    setRotate(null);
  };

  function handleMenuClick(event) {
    setAnchorEl(event.currentTarget);
    setRotate(true);
  }
  return (
    <>
      <IconButton
        onClick={anchorEl === null ? handleMenuClick : handleClose}
        sx={{
          position: "fixed",
          top: -50,
          left: -50,
          backgroundColor: "#C3F8FF",
          height: 120,
          width: 130,
          borderRadius: "50%",
          marginTop: "80px",
          "&:hover": {
            backgroundColor: "#C3F8FF",
          },
          zIndex: 9998,
        }}
      >
        {anchorEl === null ? <MenuIcon /> : <CloseIcon />}
      </IconButton>

      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            backgroundColor: "#16213E",
            color: "#FDFF00",
            boxShadow: "none",
            marginLeft: 1,
            marginTop: 400,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            onClick={handleClose}
            sx={{
              textTransform: "uppercase",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuControl;
