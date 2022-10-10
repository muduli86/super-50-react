import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

const HiddenSearchWidget = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  function handleClick() {
    setOpenSearch(!openSearch);
  }
  return (
    <>
      {openSearch && (
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search...'
          inputProps={{ "aria-label": "search" }}
        />
      )}
      <IconButton
        type='button'
        sx={{ p: "10px" }}
        aria-label='search'
        onClick={handleClick}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default HiddenSearchWidget;
