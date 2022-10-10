import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Projects = () => {
  const items = [
    {
      name: "Expanded Cards",
      path: "/",
    },
    {
      name: "Progress Steps",
      path: "/progress-steps",
    },
    {
      name: "Rotating Navigation",
      path: "/rotating-navigation",
    },
    {
      name: "Hidden Search Widget",
      path: "/hidden-search-widget",
    },
  ];
  const search = useLocation();
  const [project, setProject] = React.useState(
    items.filter((item) => item.path === search.pathname)[0].name
  );

  function handleChange(event) {
    setProject(event.target.value);
  }
  return (
    <Box
      sx={{
        margin: 1,
        backgroundColor: "#ececec",
      }}
    >
      <FormControl fullWidth>
        <Select value={project} label='Projects' onChange={handleChange}>
          {items.map((item, index) => {
            return (
              <MenuItem
                value={item.name}
                key={index}
                component={RouterLink}
                to={item.path}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Projects;
